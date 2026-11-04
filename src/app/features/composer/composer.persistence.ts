/**
 * Sauvegarde locale de la composition en cours.
 *
 * Le flux Composer peut faire une vingtaine d'étapes : perdre la sélection sur
 * un F5 ou un onglet fermé est inacceptable. On sérialise donc l'état du store
 * dans `localStorage` à chaque changement, et on le relit au démarrage.
 *
 * Deux règles importantes :
 * - **Version** : `DRAFT_VERSION` est incrémentée dès que la forme du snapshot
 *   change. Un brouillon d'une version antérieure est jeté, pas migré.
 * - **Assainissement** : tout ce qui est relu est revalidé contre le catalogue
 *   (`VARIANTS_BY_TYPE`, `SECTION_CATALOG`). Une variante supprimée du catalogue
 *   depuis la sauvegarde disparaît du brouillon au lieu de casser le générateur.
 */
import { ACCENT_PRESETS, AccentPreset } from './data/accents';
import { PALETTE_PRESETS, ColorPalette } from './data/palettes';
import { SECTION_CATALOG } from './data/section-catalog';
import { VARIANTS_BY_TYPE } from './data/variant-registry';
// Types uniquement : l'import est effacé à la compilation, donc pas de cycle
// à l'exécution avec composer.store.ts (qui, lui, importe ce module).
import type { ComposerPage, NavLink, NavLinkType, PageSection } from './composer.store';

export const DRAFT_STORAGE_KEY = 'calque.composer.draft';
export const DRAFT_VERSION = 1;

/** L'état persistable du ComposerStore. */
export interface ComposerSnapshot {
  version: number;
  savedAt: string;
  projectName: string;
  navbarId: string | null;
  accent: AccentPreset;
  palette: ColorPalette;
  selectedSections: string[];
  /** type de section (`hero`, `pricing`…) → variantes choisies */
  sectionIds: Record<string, string[]>;
  pages: ComposerPage[];
  navLinks: NavLink[];
}

const FALLBACK_PALETTE = PALETTE_PRESETS[0];
const FALLBACK_ACCENT = ACCENT_PRESETS[0];

const SECTION_TYPES = new Set(SECTION_CATALOG.map(s => s.id));

/** Index type → ids de variantes valides, pour filtrer un brouillon périmé. */
const VARIANT_IDS_BY_TYPE = new Map<string, Set<string>>(
  Object.entries(VARIANTS_BY_TYPE).map(([type, list]) => [type, new Set(list.map(v => v.id))]),
);

const ALL_VARIANT_IDS = new Set<string>(
  Object.values(VARIANTS_BY_TYPE).flatMap(list => list.map(v => v.id)),
);

const NAV_LINK_TYPES: readonly string[] = ['page', 'anchor', 'external'];

// ── Accès au stockage ────────────────────────────────────────────────────────

/**
 * `localStorage` n'est pas toujours là : rendu serveur, navigation privée,
 * stockage de site bloqué… Un accès direct **jette**, d'où le try/catch.
 */
function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

/** Relit le brouillon, ou `null` s'il n'y en a pas / s'il est inexploitable. */
export function readDraft(): ComposerSnapshot | null {
  const store = storage();
  if (!store) return null;

  let raw: string | null;
  try {
    raw = store.getItem(DRAFT_STORAGE_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;

  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    clearDraft();
    return null;
  }

  if (!isRecord(data) || data['version'] !== DRAFT_VERSION) {
    // Brouillon d'une version antérieure : on repart de zéro plutôt que de
    // tenter une migration hasardeuse.
    clearDraft();
    return null;
  }

  return sanitize(data);
}

/** Écrit le brouillon. Renvoie `false` si le stockage a refusé (quota, etc.). */
export function writeDraft(snapshot: ComposerSnapshot): boolean {
  const store = storage();
  if (!store) return false;
  try {
    store.setItem(DRAFT_STORAGE_KEY, JSON.stringify(snapshot));
    return true;
  } catch {
    return false;
  }
}

export function clearDraft(): void {
  try {
    storage()?.removeItem(DRAFT_STORAGE_KEY);
  } catch {
    /* rien à faire : le brouillon restera, il sera écrasé au prochain choix */
  }
}

// ── Assainissement ───────────────────────────────────────────────────────────

function sanitize(data: Record<string, unknown>): ComposerSnapshot {
  const pages = parsePages(data['pages']);
  return {
    version: DRAFT_VERSION,
    savedAt: str(data['savedAt']),
    projectName: str(data['projectName'], 'Mon site').slice(0, 120),
    navbarId: parseVariantId(data['navbarId'], 'navbar'),
    accent: parseAccent(data['accent']),
    palette: parsePalette(data['palette']),
    selectedSections: strArray(data['selectedSections']).filter(id => SECTION_TYPES.has(id)),
    sectionIds: parseSectionIds(data['sectionIds']),
    pages,
    navLinks: parseNavLinks(data['navLinks'], pages),
  };
}

function parseSectionIds(value: unknown): Record<string, string[]> {
  if (!isRecord(value)) return {};
  const out: Record<string, string[]> = {};
  for (const [type, ids] of Object.entries(value)) {
    const known = VARIANT_IDS_BY_TYPE.get(type);
    if (!known) continue;
    out[type] = strArray(ids).filter(id => known.has(id));
  }
  return out;
}

function parsePages(value: unknown): ComposerPage[] {
  if (!Array.isArray(value)) return [];
  const pages: ComposerPage[] = [];
  for (const raw of value) {
    if (!isRecord(raw)) continue;
    const id = str(raw['id']);
    if (!id) continue;
    pages.push({
      id,
      name: str(raw['name'], 'Page').slice(0, 120),
      isLayout: raw['isLayout'] === true,
      sections: parseSections(raw['sections']),
    });
  }
  return pages;
}

function parseSections(value: unknown): PageSection[] {
  if (!Array.isArray(value)) return [];
  const sections: PageSection[] = [];
  for (const raw of value) {
    if (!isRecord(raw)) continue;
    const sectionType = str(raw['sectionType']);
    const variantId = str(raw['variantId']);
    if (VARIANT_IDS_BY_TYPE.get(sectionType)?.has(variantId)) {
      sections.push({ variantId, sectionType });
    }
  }
  return sections;
}

function parseNavLinks(value: unknown, pages: ComposerPage[]): NavLink[] {
  if (!Array.isArray(value)) return [];
  const pageIds = new Set(pages.map(p => p.id));
  const links: NavLink[] = [];

  for (const raw of value) {
    if (!isRecord(raw)) continue;
    const id = str(raw['id']);
    if (!id) continue;

    const rawType = str(raw['type']);
    const type = (NAV_LINK_TYPES.includes(rawType) ? rawType : 'page') as NavLinkType;
    const link: NavLink = { id, label: str(raw['label'], 'Lien').slice(0, 120), type };

    // Une cible qui n'existe plus laisse le lien en place mais sans cible :
    // l'étape « Navigation » le redemandera, plutôt que de perdre le libellé.
    const pageId = str(raw['pageId']);
    if (pageId && pageIds.has(pageId)) link.pageId = pageId;

    const anchor = str(raw['anchorVariantId']);
    if (anchor && ALL_VARIANT_IDS.has(anchor)) link.anchorVariantId = anchor;

    const url = str(raw['url']);
    if (url) link.url = url.slice(0, 2000);

    links.push(link);
  }
  return links;
}

function parseVariantId(value: unknown, type: string): string | null {
  const id = str(value);
  return VARIANT_IDS_BY_TYPE.get(type)?.has(id) ? id : null;
}

function parseAccent(value: unknown): AccentPreset {
  if (!isRecord(value)) return FALLBACK_ACCENT;
  const id = str(value['id']);
  if (!id) return FALLBACK_ACCENT;
  return {
    id,
    name: str(value['name'], id),
    default: str(value['default'], FALLBACK_ACCENT.default),
    dark: str(value['dark'], FALLBACK_ACCENT.dark),
  };
}

function parsePalette(value: unknown): ColorPalette {
  if (!isRecord(value)) return FALLBACK_PALETTE;
  const id = str(value['id']);
  const brand = value['brand'];
  if (!id || !isRecord(brand)) return FALLBACK_PALETTE;

  const palette: ColorPalette = {
    id,
    name: str(value['name'], id),
    description: str(value['description']),
    brand: {
      default: str(brand['default'], FALLBACK_PALETTE.brand.default),
      dark: str(brand['dark'], FALLBACK_PALETTE.brand.dark),
    },
    surface: str(value['surface'], FALLBACK_PALETTE.surface),
    pageBg: str(value['pageBg'], FALLBACK_PALETTE.pageBg),
    ink: str(value['ink'], FALLBACK_PALETTE.ink),
  };

  // Palette personnalisée : on garde l'id Supabase pour rester raccord avec la
  // liste rechargée depuis l'API.
  const apiId = str(value['apiId']);
  if (apiId) palette.apiId = apiId;

  return palette;
}

// ── Petits utilitaires de typage ─────────────────────────────────────────────

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function str(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

function strArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}
