import { Injectable, computed, signal } from '@angular/core';
import { ACCENT_PRESETS, AccentPreset } from './data/accents';
import { PALETTE_PRESETS, ColorPalette } from './data/palettes';
import { COMPOSER_STEPS } from './data/steps';

export interface PageSection {
  variantId: string;
  sectionType: string;
}

export interface ComposerPage {
  id: string;
  name: string;
  sections: PageSection[];
  isLayout?: boolean;
}

export const LAYOUT_PAGE_ID = '__layout__';

export type NavLinkType = 'page' | 'anchor' | 'external';

export interface NavLink {
  id: string;
  label: string;
  type: NavLinkType;
  pageId?: string;           // type 'page' or 'anchor' → target page id
  anchorVariantId?: string;  // type 'anchor' → section ciblée dans cette page
  url?: string;              // type 'external' → raw URL
}

@Injectable({ providedIn: 'root' })
export class ComposerStore {
  /** Nom du projet — sert au dossier généré, au <title> et à siteConfig.name */
  readonly projectName = signal('Mon site');

  /** Navigation : pages (1 page = ancres, N pages = liens navbar) */
  readonly pages = signal<ComposerPage[]>([]);
  readonly navLinks = signal<NavLink[]>([]);

  readonly allSectionBlocks = computed((): PageSection[] => {
    const sel = this.selectedSections();
    const out: PageSection[] = [];
    const push = (type: string, ids: string[]) => {
      if (sel.has(type)) ids.forEach(id => out.push({ variantId: id, sectionType: type }));
    };
    // Layout elements (navbar is single-select, always included if chosen)
    if (this.navbarId()) out.push({ variantId: this.navbarId()!, sectionType: 'navbar' });
    push('footer',       this.footerIds());
    // Content sections
    push('hero',         this.heroIds());
    push('header',       this.headerIds());
    push('features',     this.featuresIds());
    push('process',      this.processIds());
    push('video',        this.videoIds());
    push('pricing',      this.pricingIds());
    push('story',        this.storyIds());
    push('stats',        this.statsIds());
    push('team',         this.teamIds());
    push('testimonials', this.testimonialsIds());
    push('quote',        this.quoteIds());
    push('logos',        this.logosIds());
    push('portfolio',    this.portfolioIds());
    push('product',      this.productIds());
    push('blog',         this.blogIds());
    push('cta',          this.ctaIds());
    push('faq',          this.faqIds());
    push('forms',        this.formsIds());
    push('contact',      this.contactIds());
    return out;
  });

  readonly availableSections = computed((): PageSection[] => {
    const usedIds = new Set<string>(
      this.pages().flatMap(p => p.sections.map(s => s.variantId))
    );
    return this.allSectionBlocks().filter(b => !usedIds.has(b.variantId));
  });

  /** Navbar : single-select (une seule navbar par projet) */
  readonly navbarId = signal<string | null>(null);

  /** Couleur d'accent appliquée à tous les aperçus */
  readonly accent = signal<AccentPreset>(ACCENT_PRESETS[0]);

  /** Palette de couleurs complète (brand + surface + pageBg + ink) */
  readonly palette = signal<ColorPalette>(PALETTE_PRESETS[0]);

  /** Palettes personnalisées chargées depuis la BDD */
  readonly customPalettes = signal<ColorPalette[]>([]);

  /** Multi-select : plusieurs variantes par section possible */
  readonly heroIds         = signal<string[]>([]);
  readonly headerIds       = signal<string[]>([]);
  readonly featuresIds     = signal<string[]>([]);
  readonly processIds      = signal<string[]>([]);
  readonly videoIds        = signal<string[]>([]);
  readonly pricingIds      = signal<string[]>([]);
  readonly storyIds        = signal<string[]>([]);
  readonly statsIds        = signal<string[]>([]);
  readonly teamIds         = signal<string[]>([]);
  readonly testimonialsIds = signal<string[]>([]);
  readonly quoteIds        = signal<string[]>([]);
  readonly logosIds        = signal<string[]>([]);
  readonly portfolioIds    = signal<string[]>([]);
  readonly productIds      = signal<string[]>([]);
  readonly blogIds         = signal<string[]>([]);
  readonly ctaIds          = signal<string[]>([]);
  readonly faqIds          = signal<string[]>([]);
  readonly formsIds        = signal<string[]>([]);
  readonly contactIds      = signal<string[]>([]);
  readonly footerIds       = signal<string[]>([]);

  /** Sections sélectionnées (step structure) */
  readonly selectedSections = signal<Set<string>>(new Set());

  readonly canContinueNavbar       = computed(() => this.navbarId() !== null);
  readonly canContinueHero         = computed(() => this.heroIds().length > 0);
  readonly canContinueHeader       = computed(() => this.headerIds().length > 0);
  readonly canContinueFeatures     = computed(() => this.featuresIds().length > 0);
  readonly canContinueProcess      = computed(() => this.processIds().length > 0);
  readonly canContinueVideo        = computed(() => this.videoIds().length > 0);
  readonly canContinuePricing      = computed(() => this.pricingIds().length > 0);
  readonly canContinueStory        = computed(() => this.storyIds().length > 0);
  readonly canContinueStats        = computed(() => this.statsIds().length > 0);
  readonly canContinueTeam         = computed(() => this.teamIds().length > 0);
  readonly canContinueTestimonials = computed(() => this.testimonialsIds().length > 0);
  readonly canContinueQuote        = computed(() => this.quoteIds().length > 0);
  readonly canContinueLogos        = computed(() => this.logosIds().length > 0);
  readonly canContinuePortfolio    = computed(() => this.portfolioIds().length > 0);
  readonly canContinueProduct      = computed(() => this.productIds().length > 0);
  readonly canContinueBlog         = computed(() => this.blogIds().length > 0);
  readonly canContinueCta          = computed(() => this.ctaIds().length > 0);
  readonly canContinueFaq          = computed(() => this.faqIds().length > 0);
  readonly canContinueForms        = computed(() => this.formsIds().length > 0);
  readonly canContinueContact      = computed(() => this.contactIds().length > 0);
  readonly canContinueFooter       = computed(() => this.footerIds().length > 0);
  readonly canContinueSections     = computed(() => this.selectedSections().size > 0);

  readonly visibleSteps = computed(() => {
    const selected = this.selectedSections();
    return COMPOSER_STEPS.filter(step => {
      switch (step.id) {
        case 'navbar':
        case 'structure':
        case 'pages':
        case 'generer':
          return true;
        case 'hero':           return selected.has('hero');
        case 'header':         return selected.has('header');
        case 'fonctionnalites': return selected.has('features');
        case 'process':        return selected.has('process');
        case 'video':          return selected.has('video');
        case 'tarifs':         return selected.has('pricing');
        case 'story':          return selected.has('story');
        case 'statistiques':   return selected.has('stats');
        case 'team':           return selected.has('team');
        case 'temoignages':    return selected.has('testimonials');
        case 'quote':          return selected.has('quote');
        case 'logos':          return selected.has('logos');
        case 'portfolio':      return selected.has('portfolio');
        case 'product':        return selected.has('product');
        case 'articles':       return selected.has('blog');
        case 'cta':            return selected.has('cta');
        case 'faq':            return selected.has('faq');
        case 'formulaires':    return selected.has('forms');
        case 'contact':        return selected.has('contact');
        case 'footer':         return selected.has('footer');
        default:               return false;
      }
    });
  });

  stepIndexFor(stepId: string): number {
    return this.visibleSteps().findIndex(s => s.id === stepId);
  }

  nextStepLabelAfter(current: 'sections' | 'hero' | 'header' | 'features' | 'process' | 'video' | 'pricing' | 'story' | 'stats' | 'team' | 'testimonials' | 'logos' | 'portfolio' | 'blog' | 'cta' | 'faq' | 'forms' | 'contact' | 'footer' | 'quote' | 'product'): string {
    const map: Record<string, string> = {
      '/composer/hero':         'Hero',
      '/composer/header':       'Header de page',
      '/composer/features':     'Fonctionnalités',
      '/composer/process':      'Processus',
      '/composer/video':        'Vidéo / Démo',
      '/composer/pricing':      'Tarifs',
      '/composer/story':        'Histoire',
      '/composer/stats':        'Statistiques',
      '/composer/team':         'Équipe',
      '/composer/testimonials': 'Témoignages',
      '/composer/quote':        'Citation',
      '/composer/logos':        'Logos / Presse',
      '/composer/portfolio':    'Portfolio',
      '/composer/product':      'Fiche produit',
      '/composer/blog':         'Blog',
      '/composer/cta':          'CTA',
      '/composer/faq':          'FAQ',
      '/composer/forms':        'Formulaires',
      '/composer/contact':      'Contact',
      '/composer/footer':       'Footer',
      '/composer/pages':        'Navigation',
      '/composer/generer':      'Générer',
    };
    return map[this.nextStepAfter(current)] ?? 'Navigation';
  }

  private static readonly STEP_ORDER = ['hero', 'header', 'features', 'process', 'video', 'pricing', 'story', 'stats', 'team', 'testimonials', 'quote', 'logos', 'portfolio', 'product', 'blog', 'cta', 'faq', 'forms', 'contact', 'footer'] as const;
  private static readonly STEP_ROUTES: Record<string, string> = {
    hero:         '/composer/hero',
    header:       '/composer/header',
    features:     '/composer/features',
    process:      '/composer/process',
    video:        '/composer/video',
    pricing:      '/composer/pricing',
    story:        '/composer/story',
    stats:        '/composer/stats',
    team:         '/composer/team',
    testimonials: '/composer/testimonials',
    quote:        '/composer/quote',
    logos:        '/composer/logos',
    portfolio:    '/composer/portfolio',
    product:      '/composer/product',
    blog:         '/composer/blog',
    cta:          '/composer/cta',
    faq:          '/composer/faq',
    forms:        '/composer/forms',
    contact:      '/composer/contact',
    footer:       '/composer/footer',
  };

  nextStepAfter(current: 'sections' | 'hero' | 'header' | 'features' | 'process' | 'video' | 'pricing' | 'story' | 'stats' | 'team' | 'testimonials' | 'logos' | 'portfolio' | 'blog' | 'cta' | 'faq' | 'forms' | 'contact' | 'footer' | 'quote' | 'product'): string {
    const selected = this.selectedSections();
    const startIndex = current === 'sections'
      ? 0
      : ComposerStore.STEP_ORDER.indexOf(current as 'hero' | 'header' | 'features' | 'process' | 'video' | 'pricing' | 'story' | 'stats' | 'team' | 'testimonials' | 'logos' | 'portfolio' | 'blog' | 'cta' | 'faq' | 'forms' | 'contact' | 'footer' | 'quote' | 'product') + 1;

    for (let i = startIndex; i < ComposerStore.STEP_ORDER.length; i++) {
      const id = ComposerStore.STEP_ORDER[i];
      if (selected.has(id)) {
        return ComposerStore.STEP_ROUTES[id];
      }
    }
    return '/composer/pages';
  }

  // --- Helpers de sélection (is*Selected) ---

  isHeroSelected(id: string):         boolean { return this.heroIds().includes(id); }
  isHeaderSelected(id: string):       boolean { return this.headerIds().includes(id); }
  isFeaturesSelected(id: string):     boolean { return this.featuresIds().includes(id); }
  isProcessSelected(id: string):      boolean { return this.processIds().includes(id); }
  isVideoSelected(id: string):        boolean { return this.videoIds().includes(id); }
  isPricingSelected(id: string):      boolean { return this.pricingIds().includes(id); }
  isStorySelected(id: string):        boolean { return this.storyIds().includes(id); }
  isStatsSelected(id: string):        boolean { return this.statsIds().includes(id); }
  isTeamSelected(id: string):         boolean { return this.teamIds().includes(id); }
  isTestimonialsSelected(id: string): boolean { return this.testimonialsIds().includes(id); }
  isQuoteSelected(id: string):        boolean { return this.quoteIds().includes(id); }
  isLogosSelected(id: string):        boolean { return this.logosIds().includes(id); }
  isPortfolioSelected(id: string):    boolean { return this.portfolioIds().includes(id); }
  isProductSelected(id: string):      boolean { return this.productIds().includes(id); }
  isBlogSelected(id: string):         boolean { return this.blogIds().includes(id); }
  isCtaSelected(id: string):          boolean { return this.ctaIds().includes(id); }
  isFaqSelected(id: string):          boolean { return this.faqIds().includes(id); }
  isFormsSelected(id: string):        boolean { return this.formsIds().includes(id); }
  isContactSelected(id: string):      boolean { return this.contactIds().includes(id); }
  isFooterSelected(id: string):       boolean { return this.footerIds().includes(id); }

  // --- Méthodes de sélection (toggle) ---

  selectNavbar(id: string): void { this.navbarId.set(id); }

  selectHero(id: string):         void { this.heroIds.update(ids         => this._toggle(ids, id)); }
  selectHeader(id: string):       void { this.headerIds.update(ids       => this._toggle(ids, id)); }
  selectFeatures(id: string):     void { this.featuresIds.update(ids     => this._toggle(ids, id)); }
  selectProcess(id: string):      void { this.processIds.update(ids      => this._toggle(ids, id)); }
  selectVideo(id: string):        void { this.videoIds.update(ids        => this._toggle(ids, id)); }
  selectPricing(id: string):      void { this.pricingIds.update(ids      => this._toggle(ids, id)); }
  selectStory(id: string):        void { this.storyIds.update(ids        => this._toggle(ids, id)); }
  selectStats(id: string):        void { this.statsIds.update(ids        => this._toggle(ids, id)); }
  selectTeam(id: string):         void { this.teamIds.update(ids         => this._toggle(ids, id)); }
  selectTestimonials(id: string): void { this.testimonialsIds.update(ids => this._toggle(ids, id)); }
  selectQuote(id: string):        void { this.quoteIds.update(ids        => this._toggle(ids, id)); }
  selectLogos(id: string):        void { this.logosIds.update(ids        => this._toggle(ids, id)); }
  selectPortfolio(id: string):    void { this.portfolioIds.update(ids    => this._toggle(ids, id)); }
  selectProduct(id: string):      void { this.productIds.update(ids      => this._toggle(ids, id)); }
  selectBlog(id: string):         void { this.blogIds.update(ids         => this._toggle(ids, id)); }
  selectCta(id: string):          void { this.ctaIds.update(ids          => this._toggle(ids, id)); }
  selectFaq(id: string):          void { this.faqIds.update(ids          => this._toggle(ids, id)); }
  selectForms(id: string):        void { this.formsIds.update(ids        => this._toggle(ids, id)); }
  selectContact(id: string):      void { this.contactIds.update(ids      => this._toggle(ids, id)); }
  selectFooter(id: string):       void { this.footerIds.update(ids       => this._toggle(ids, id)); }

  setAccent(preset: AccentPreset): void { this.accent.set(preset); }

  setPalette(p: ColorPalette): void {
    this.palette.set(p);
    // Synchronise l'accent pour que les aperçus des autres étapes se mettent à jour
    this.accent.set({ id: p.id, name: p.name, default: p.brand.default, dark: p.brand.dark });
  }

  addCustomPalette(p: ColorPalette): void {
    this.customPalettes.update(list => [p, ...list]);
  }

  removeCustomPalette(id: string): void {
    this.customPalettes.update(list => list.filter(p => p.id !== id));
    // Si la palette supprimée était active, revenir sur la première preset
    if (this.palette().id === id) {
      this.setPalette(PALETTE_PRESETS[0]);
    }
  }

  setCustomPalettes(list: ColorPalette[]): void {
    this.customPalettes.set(list);
  }

  toggleSection(id: string): void {
    this.selectedSections.update(current => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  // --- Gestion des pages ---

  initPages(): void {
    if (this.pages().length > 0) return;
    const layoutSections: PageSection[] = [];
    if (this.navbarId()) layoutSections.push({ variantId: this.navbarId()!, sectionType: 'navbar' });
    this.footerIds().forEach(id => layoutSections.push({ variantId: id, sectionType: 'footer' }));

    const contentSections = this.allSectionBlocks().filter(
      b => b.sectionType !== 'navbar' && b.sectionType !== 'footer'
    );

    this.pages.set([
      { id: LAYOUT_PAGE_ID, name: 'Mise en page', sections: layoutSections, isLayout: true },
      { id: this._uid(), name: 'Accueil', sections: contentSections },
      { id: this._uid(), name: 'Article', sections: [] },
      { id: this._uid(), name: 'Autre', sections: [] },
    ]);
  }

  initNavLinks(): void {
    if (this.navLinks().length > 0) return;
    const links: NavLink[] = this.pages()
      .filter(p => !p.isLayout)
      .map(p => ({ id: this._uid(), label: p.name, type: 'page' as NavLinkType, pageId: p.id }));
    this.navLinks.set(links);
  }

  addNavLink(): void {
    this.navLinks.update(links => [
      ...links,
      { id: this._uid(), label: 'Nouveau lien', type: 'page' as NavLinkType },
    ]);
  }

  removeNavLink(id: string): void {
    this.navLinks.update(links => links.filter(l => l.id !== id));
  }

  updateNavLink(id: string, patch: Partial<NavLink>): void {
    this.navLinks.update(links => links.map(l => l.id === id ? { ...l, ...patch } : l));
  }

  reorderNavLinks(from: number, to: number): void {
    this.navLinks.update(links => {
      const arr = [...links];
      const [moved] = arr.splice(from, 1);
      arr.splice(to, 0, moved);
      return arr;
    });
  }

  addPage(name: string): void {
    const id = this._uid();
    this.pages.update(pages => [...pages, { id, name, sections: [] }]);
  }

  renamePage(id: string, name: string): void {
    this.pages.update(pages => pages.map(p => p.id === id ? { ...p, name } : p));
  }

  removePage(id: string): void {
    if (id === LAYOUT_PAGE_ID) return;
    const contentPages = this.pages().filter(p => !p.isLayout);
    if (contentPages.length <= 1) return;
    const page = this.pages().find(p => p.id === id);
    if (!page) return;
    const orphans = page.sections;
    this.pages.update(pages => {
      const rest = pages.filter(p => p.id !== id);
      if (orphans.length > 0) {
        // Send orphans to first non-layout page
        const firstContent = rest.find(p => !p.isLayout);
        if (firstContent) {
          firstContent.sections = [...firstContent.sections, ...orphans];
        }
      }
      return rest;
    });
  }

  moveSectionBetweenPages(fromPageId: string, fromIdx: number, toPageId: string, toIdx: number): void {
    this.pages.update(pages => {
      const result = pages.map(p => ({ ...p, sections: [...p.sections] }));
      const from = result.find(p => p.id === fromPageId);
      const to   = result.find(p => p.id === toPageId);
      if (!from || !to) return pages;
      const [moved] = from.sections.splice(fromIdx, 1);
      const insertAt = fromPageId === toPageId && fromIdx < toIdx ? toIdx - 1 : toIdx;
      to.sections.splice(Math.max(0, insertAt), 0, moved);
      return result;
    });
  }

  addSectionToPage(pageId: string, section: PageSection, atIdx?: number): void {
    this.pages.update(pages => pages.map(p => {
      if (p.id !== pageId || p.sections.some(s => s.variantId === section.variantId)) return p;
      const secs = [...p.sections];
      atIdx !== undefined ? secs.splice(atIdx, 0, section) : secs.push(section);
      return { ...p, sections: secs };
    }));
  }

  removeSectionFromPage(pageId: string, variantId: string): void {
    this.pages.update(pages => pages.map(p => {
      if (p.id !== pageId) return p;
      return { ...p, sections: p.sections.filter(s => s.variantId !== variantId) };
    }));
  }

  private _uid(): string {
    return Math.random().toString(36).slice(2, 10);
  }

  private _toggle(ids: string[], id: string): string[] {
    return ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id];
  }
}
