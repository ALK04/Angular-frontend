import { TestBed } from '@angular/core/testing';
import { ComposerStore } from './composer.store';
import { ComposerSnapshot, DRAFT_STORAGE_KEY, DRAFT_VERSION } from './composer.persistence';
import { NAVBAR_VARIANTS } from './data/navbar-variants';
import { HERO_VARIANTS } from './data/hero-variants';

const NAVBAR_ID = NAVBAR_VARIANTS[0].id;
const HERO_ID = HERO_VARIANTS[0].id;
const HERO_ID_2 = HERO_VARIANTS[1].id;

/** Simule un rechargement de page : nouvel injecteur, donc nouveau store. */
function reloadStore(): ComposerStore {
  TestBed.resetTestingModule();
  return TestBed.inject(ComposerStore);
}

function storedDraft(): Partial<ComposerSnapshot> | null {
  const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function writeRawDraft(draft: unknown): void {
  localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

describe('ComposerStore — brouillon local', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  afterEach(() => localStorage.clear());

  it('ne crée pas de brouillon tant que rien n’est composé', () => {
    const store = TestBed.inject(ComposerStore);
    store.projectName.set('Juste un nom');
    TestBed.tick();

    expect(storedDraft()).toBeNull();
  });

  it('sauvegarde les choix dès la première sélection', () => {
    const store = TestBed.inject(ComposerStore);
    store.selectNavbar(NAVBAR_ID);
    store.toggleSection('hero');
    store.selectHero(HERO_ID);
    store.projectName.set('Site de test');
    TestBed.tick();

    const draft = storedDraft();
    expect(draft?.version).toBe(DRAFT_VERSION);
    expect(draft?.navbarId).toBe(NAVBAR_ID);
    expect(draft?.projectName).toBe('Site de test');
    expect(draft?.selectedSections).toEqual(['hero']);
    expect(draft?.sectionIds?.['hero']).toEqual([HERO_ID]);
    expect(store.draftSavedAt()).not.toBeNull();
  });

  it('restaure la composition au rechargement', () => {
    const first = TestBed.inject(ComposerStore);
    first.selectNavbar(NAVBAR_ID);
    first.toggleSection('hero');
    first.selectHero(HERO_ID);
    first.selectHero(HERO_ID_2);
    first.initPages();
    first.initNavLinks();
    first.renamePage(first.pages()[1].id, 'Accueil renommée');
    TestBed.tick();

    const reloaded = reloadStore();
    expect(reloaded.draftRestored()).toBe(true);
    expect(reloaded.navbarId()).toBe(NAVBAR_ID);
    expect([...reloaded.selectedSections()]).toEqual(['hero']);
    expect(reloaded.heroIds()).toEqual([HERO_ID, HERO_ID_2]);
    expect(reloaded.pages()[1].name).toBe('Accueil renommée');
    expect(reloaded.navLinks().length).toBe(first.navLinks().length);
  });

  it('ignore un brouillon écrit par une version antérieure', () => {
    writeRawDraft({ version: DRAFT_VERSION - 1, navbarId: NAVBAR_ID });

    const store = reloadStore();
    expect(store.draftRestored()).toBe(false);
    expect(store.navbarId()).toBeNull();
    expect(storedDraft()).toBeNull();
  });

  it('écarte les variantes qui ne sont plus au catalogue', () => {
    writeRawDraft({
      version: DRAFT_VERSION,
      navbarId: 'navbar-supprimee-du-catalogue',
      selectedSections: ['hero', 'section-inconnue'],
      sectionIds: { hero: ['hero-fantome', HERO_ID], famille_inconnue: ['peu importe'] },
      pages: [
        {
          id: 'p1',
          name: 'Accueil',
          sections: [
            { variantId: HERO_ID, sectionType: 'hero' },
            { variantId: 'hero-fantome', sectionType: 'hero' },
          ],
        },
      ],
      navLinks: [{ id: 'l1', label: 'Accueil', type: 'page', pageId: 'page-disparue' }],
    });

    const store = reloadStore();
    expect(store.navbarId()).toBeNull();
    expect([...store.selectedSections()]).toEqual(['hero']);
    expect(store.heroIds()).toEqual([HERO_ID]);
    expect(store.pages()[0].sections).toEqual([{ variantId: HERO_ID, sectionType: 'hero' }]);
    // Le libellé du lien est conservé, mais sa cible morte est retirée.
    expect(store.navLinks()[0].label).toBe('Accueil');
    expect(store.navLinks()[0].pageId).toBeUndefined();
  });

  it('reset() vide la composition et supprime le brouillon', () => {
    const store = TestBed.inject(ComposerStore);
    store.selectNavbar(NAVBAR_ID);
    store.toggleSection('hero');
    store.selectHero(HERO_ID);
    store.initPages();
    TestBed.tick();
    expect(storedDraft()).not.toBeNull();

    store.reset();
    TestBed.tick();

    expect(storedDraft()).toBeNull();
    expect(store.navbarId()).toBeNull();
    expect(store.heroIds()).toEqual([]);
    expect(store.pages()).toEqual([]);
    expect(store.draftSavedAt()).toBeNull();
    // Et le rechargement suivant repart bien à zéro.
    expect(reloadStore().navbarId()).toBeNull();
  });
});
