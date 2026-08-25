import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Reveal } from '../../../../shared/directives/reveal.directive';
import { buildPreviewDoc, PreviewNavLink } from '../../../composer/preview-doc';
import { ACCENT_PRESETS, AccentPreset } from '../../../composer/data/accents';
import { PALETTE_PRESETS } from '../../../composer/data/palettes';
import { BrickVariant } from '../../../../models/brick-variant.model';
import { NAVBAR_VARIANTS } from '../../../composer/data/navbar-variants';
import { HEADER_VARIANTS } from '../../../composer/data/header-variants';
import { HERO_VARIANTS } from '../../../composer/data/hero-variants';
import { FEATURES_VARIANTS } from '../../../composer/data/features-variants';
import { STATS_VARIANTS } from '../../../composer/data/stats-variants';
import { CTA_VARIANTS } from '../../../composer/data/cta-variants';
import { PRICING_VARIANTS } from '../../../composer/data/pricing-variants';
import { FAQ_VARIANTS } from '../../../composer/data/faq-variants';
import { CONTACT_VARIANTS } from '../../../composer/data/contact-variants';
import { FOOTER_VARIANTS } from '../../../composer/data/footer-variants';

interface DemoPage {
  id: string;
  name: string;
  /** URL affichée dans la barre du navigateur, comme dans le configurateur. */
  url: string;
  sections: BrickVariant[];
}

/** Retrouve une variante par son id, en ignorant celles qui auraient disparu du catalogue. */
function pick(catalog: BrickVariant[], ...ids: string[]): BrickVariant[] {
  return ids
    .map(id => catalog.find(v => v.id === id))
    .filter((v): v is BrickVariant => !!v);
}

/**
 * Aperçu de la page de présentation : c'est **exactement** l'aperçu de la
 * dernière étape du composeur (`/composer/pages`) — même chrome navigateur,
 * mêmes onglets de pages, même document construit par `buildPreviewDoc`.
 * Seules les sections sont figées, pour montrer un site déjà composé.
 */
@Component({
  selector: 'app-generator-preview',
  imports: [Reveal],
  templateUrl: './generator-preview.html',
  styleUrl: './generator-preview.css',
})
export class GeneratorPreview {
  private readonly sanitizer = inject(DomSanitizer);

  /** Navbar et footer sont globaux au site — comme la colonne « Global » du kanban. */
  private readonly layoutTop = pick(NAVBAR_VARIANTS, 'navbar-epuree');
  private readonly layoutBottom = pick(FOOTER_VARIANTS, 'footer-clair');

  protected readonly pages: DemoPage[] = [
    {
      id: 'accueil',
      name: 'Accueil',
      url: '/',
      sections: [
        ...pick(HERO_VARIANTS, 'hero-centre'),
        ...pick(FEATURES_VARIANTS, 'features-grille'),
        ...pick(STATS_VARIANTS, 'stats-ligne'),
        ...pick(CTA_VARIANTS, 'cta-banniere'),
      ],
    },
    {
      id: 'tarifs',
      name: 'Tarifs',
      url: '/tarifs',
      sections: [
        ...pick(HEADER_VARIANTS, 'header-clair'),
        ...pick(PRICING_VARIANTS, 'pricing-3-plans'),
        ...pick(FAQ_VARIANTS, 'faq-accordeon'),
      ],
    },
    {
      id: 'contact',
      name: 'Contact',
      url: '/contact',
      sections: [
        ...pick(HEADER_VARIANTS, 'header-clair'),
        ...pick(CONTACT_VARIANTS, 'contact-infos'),
      ],
    },
  ];

  protected readonly accents = ACCENT_PRESETS;
  protected readonly accent = signal<AccentPreset>(ACCENT_PRESETS[0]);
  protected readonly activePageId = signal(this.pages[0].id);

  protected setAccent(a: AccentPreset): void { this.accent.set(a); }
  protected setPage(id: string): void { this.activePageId.set(id); }

  protected readonly activePage = computed<DemoPage>(
    () => this.pages.find(p => p.id === this.activePageId()) ?? this.pages[0],
  );

  /** Liens de navbar déduits des pages, exactement comme dans le configurateur. */
  private readonly navLinks: PreviewNavLink[] = this.pages.map(p => ({
    label: p.name,
    href: p.url,
  }));

  /** navbar + sections de la page active + footer. */
  protected readonly sectionCount = computed(
    () => this.layoutTop.length + this.activePage().sections.length + this.layoutBottom.length,
  );

  /** Noms des briques empilées sur la page active, listés sous l'aperçu. */
  protected readonly stack = computed(() => [
    ...this.layoutTop,
    ...this.activePage().sections,
    ...this.layoutBottom,
  ]);

  protected readonly doc = computed<SafeHtml>(() => {
    const body = this.stack().map(v => v.previewHtml).join('\n');
    return this.sanitizer.bypassSecurityTrustHtml(
      buildPreviewDoc(body, this.accent(), PALETTE_PRESETS[0], this.navLinks),
    );
  });
}
