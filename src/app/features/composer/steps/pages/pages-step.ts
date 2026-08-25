import { Component, HostListener, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { ComposerStore, PageSection, NavLink, NavLinkType, LAYOUT_PAGE_ID } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { AccentPicker } from '../../components/accent-picker/accent-picker';
import { buildPreviewDoc } from '../../preview-doc';
import { PALETTE_PRESETS, ColorPalette } from '../../data/palettes';
import { PaletteApiService } from '../../../../services/palette-api.service';
import { SECTION_CATALOG } from '../../data/section-catalog';
import { NAVBAR_VARIANTS } from '../../data/navbar-variants';
import { HERO_VARIANTS } from '../../data/hero-variants';
import { HEADER_VARIANTS } from '../../data/header-variants';
import { FEATURES_VARIANTS } from '../../data/features-variants';
import { PROCESS_VARIANTS } from '../../data/process-variants';
import { VIDEO_VARIANTS } from '../../data/video-variants';
import { PRICING_VARIANTS } from '../../data/pricing-variants';
import { STORY_VARIANTS } from '../../data/story-variants';
import { STATS_VARIANTS } from '../../data/stats-variants';
import { TEAM_VARIANTS } from '../../data/team-variants';
import { TESTIMONIALS_VARIANTS } from '../../data/testimonials-variants';
import { QUOTE_VARIANTS } from '../../data/quote-variants';
import { LOGOS_VARIANTS } from '../../data/logos-variants';
import { PORTFOLIO_VARIANTS } from '../../data/portfolio-variants';
import { PRODUCT_VARIANTS } from '../../data/product-variants';
import { BLOG_VARIANTS } from '../../data/blog-variants';
import { CTA_VARIANTS } from '../../data/cta-variants';
import { FAQ_VARIANTS } from '../../data/faq-variants';
import { FORMS_VARIANTS } from '../../data/forms-variants';
import { CONTACT_VARIANTS } from '../../data/contact-variants';
import { FOOTER_VARIANTS } from '../../data/footer-variants';
import { slugify } from '../../generator/naming';
import { anchorsForPage } from '../../generator/anchors';

interface DragMove { kind: 'move'; fromPageId: string; fromIdx: number }
interface DragAdd  { kind: 'add';  section: PageSection }
type DragData = DragMove | DragAdd;

@Component({
  selector: 'app-pages-step',
  imports: [ComposerTopbar, StepPill, AccentPicker, FormsModule, NgTemplateOutlet],
  templateUrl: './pages-step.html',
  styleUrl: './pages-step.css',
})
export class PagesStep implements OnInit {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly paletteApi = inject(PaletteApiService);
  protected readonly LAYOUT_ID = LAYOUT_PAGE_ID;

  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('pages'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('pages') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Config. site`;
  }

  // Page management
  protected newPageName = signal('');
  protected editingPageId = signal<string | null>(null);
  protected editingName = signal('');

  // Section drag state
  private dragData: DragData | null = null;
  protected draggingKey = signal<string>('');
  protected dropKey = signal<string>('');

  // Nav links drag state
  private linkDragIdx: number | null = null;
  protected linkDropIdx = signal<number | null>(null);

  private readonly typeNames: Record<string, string> = Object.fromEntries(
    SECTION_CATALOG.map(s => [s.id, s.name])
  );

  // Lookup map: variantId → previewHtml (built once from all variant catalogs)
  private readonly variantHtmlMap: Record<string, string> = (() => {
    const map: Record<string, string> = {};
    const add = (arr: { id: string; previewHtml: string }[]) =>
      arr.forEach(v => { map[v.id] = v.previewHtml; });
    add(NAVBAR_VARIANTS);
    add(HERO_VARIANTS);
    add(HEADER_VARIANTS);
    add(FEATURES_VARIANTS);
    add(PROCESS_VARIANTS);
    add(VIDEO_VARIANTS);
    add(PRICING_VARIANTS);
    add(STORY_VARIANTS);
    add(STATS_VARIANTS);
    add(TEAM_VARIANTS);
    add(TESTIMONIALS_VARIANTS);
    add(QUOTE_VARIANTS);
    add(LOGOS_VARIANTS);
    add(PORTFOLIO_VARIANTS);
    add(PRODUCT_VARIANTS);
    add(BLOG_VARIANTS);
    add(CTA_VARIANTS);
    add(FAQ_VARIANTS);
    add(FORMS_VARIANTS);
    add(CONTACT_VARIANTS);
    add(FOOTER_VARIANTS);
    return map;
  })();

  // Page active dans l'aperçu ('' = première page par défaut)
  protected readonly previewPageId = signal('');

  protected setPreviewPage(pageId: string): void {
    this.previewPageId.set(pageId);
  }

  // Résout la page de contenu à afficher dans l'aperçu
  protected readonly activePreviewPage = computed(() => {
    const pages = this.store.pages();
    const id = this.previewPageId();
    return pages.find(p => p.id === id && !p.isLayout)
      ?? pages.find(p => !p.isLayout)
      ?? null;
  });

  protected readonly palettes = PALETTE_PRESETS;

  // ── Panel de création de palette personnalisée ───────────────
  protected showCreator = signal(false);
  protected saving      = signal(false);

  protected draft = signal({
    name:         'Ma palette',
    brandDefault: '#5b3df5',
    surface:      '#ffffff',
    pageBg:       '#eef0f5',
    ink:          '#14121f',
  });

  protected openCreator(): void  { this.showCreator.set(true); }
  protected closeCreator(): void { this.showCreator.set(false); }

  protected updateDraft(field: keyof ReturnType<typeof this.draft>, value: string): void {
    this.draft.update(d => ({ ...d, [field]: value }));
  }

  // Auto-darken : assombrit la couleur brand de 20 % pour obtenir brand-dark
  protected get draftBrandDark(): string {
    return this.darkenHex(this.draft().brandDefault, 0.2);
  }

  // Mini-preview de la palette en cours de création (même structure que dans le grid)
  protected readonly draftPalette = computed<ColorPalette>(() => ({
    id: '__draft__',
    name: this.draft().name || 'Aperçu',
    description: '',
    brand: { default: this.draft().brandDefault, dark: this.darkenHex(this.draft().brandDefault, 0.2) },
    surface: this.draft().surface,
    pageBg:  this.draft().pageBg,
    ink:     this.draft().ink,
  }));

  protected async savePalette(): Promise<void> {
    const d = this.draft();
    if (!d.name.trim()) return;
    this.saving.set(true);
    this.paletteApi.create({
      name:         d.name.trim(),
      brandDefault: d.brandDefault,
      brandDark:    this.darkenHex(d.brandDefault, 0.2),
      surface:      d.surface,
      pageBg:       d.pageBg,
      ink:          d.ink,
    }).subscribe({
      next: (created) => {
        this.store.addCustomPalette(created);
        this.store.setPalette(created);
        this.draft.set({ name: 'Ma palette', brandDefault: '#5b3df5', surface: '#ffffff', pageBg: '#eef0f5', ink: '#14121f' });
        this.showCreator.set(false);
        this.saving.set(false);
      },
      error: () => this.saving.set(false),
    });
  }

  protected deleteCustomPalette(palette: ColorPalette, event: MouseEvent): void {
    event.stopPropagation();
    if (!palette.apiId) return;
    this.paletteApi.delete(palette.apiId).subscribe(() => {
      this.store.removeCustomPalette(palette.id);
    });
  }

  private darkenHex(hex: string, amount: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const f = 1 - amount;
    return '#'
      + Math.round(r * f).toString(16).padStart(2, '0')
      + Math.round(g * f).toString(16).padStart(2, '0')
      + Math.round(b * f).toString(16).padStart(2, '0');
  }

  // Aperçu réactif : navbar (layout) → sections de la page active → footer (layout)
  protected readonly compositeDoc = computed<SafeHtml>(() => {
    const accent = this.store.accent();   // brand color (peut être surchargé par AccentPicker)
    const palette = this.store.palette(); // surface + pageBg + ink
    const pages = this.store.pages();
    const layoutPage = pages.find(p => p.isLayout);
    const contentPage = this.activePreviewPage();
    const parts: string[] = [];

    // 1. Navbar (depuis la colonne layout du kanban)
    if (layoutPage) {
      for (const s of layoutPage.sections.filter(s => s.sectionType === 'navbar')) {
        const html = this.variantHtmlMap[s.variantId];
        if (html) parts.push(html);
      }
    }

    // 2. Sections de la page sélectionnée, enveloppées de leur ancre —
    //    exactement comme les fichiers de pages/ du projet généré.
    if (contentPage) {
      const anchors = anchorsForPage(contentPage);
      for (const s of contentPage.sections) {
        const html = this.variantHtmlMap[s.variantId];
        if (html) parts.push(`<div id="${anchors.get(s.variantId) ?? 'section'}">${html}</div>`);
      }
    }

    // 3. Footer (depuis la colonne layout du kanban)
    if (layoutPage) {
      for (const s of layoutPage.sections.filter(s => s.sectionType === 'footer')) {
        const html = this.variantHtmlMap[s.variantId];
        if (html) parts.push(html);
      }
    }

    const body = parts.length > 0
      ? parts.join('\n')
      : `<div style="display:flex;align-items:center;justify-content:center;height:320px;
            font-family:sans-serif;color:#bbb;font-size:14px;flex-direction:column;gap:12px;">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="4" y="8" width="32" height="24" rx="3" stroke="#ccc" stroke-width="1.5"/>
             <path d="M4 14h32" stroke="#ccc" stroke-width="1.5"/>
           </svg>
           <span>Aucune section assignée à cette page</span>
           <span style="font-size:12px;color:#ddd;">Glissez des sections depuis le kanban ci-dessus</span>
         </div>`;

    const navLinks = this.resolvedNavLinks();
    return this.sanitizer.bypassSecurityTrustHtml(buildPreviewDoc(body, accent, palette, navLinks));
  });

  protected readonly activePreviewUrl = computed(() => {
    const page = this.activePreviewPage();
    if (!page) return '/';
    const pages = this.store.pages().filter(p => !p.isLayout);
    return pages.indexOf(page) === 0 ? '/' : '/' + this.pageSlug(page.name);
  });

  // Même règle que le générateur, pour que l'URL vue dans l'aperçu soit
  // exactement celle du projet téléchargé.
  private pageSlug(name: string): string {
    return slugify(name);
  }

  // Résout chaque NavLink en { label, href } prêt à injecter dans la navbar de l'aperçu.
  private resolvedNavLinks(): { label: string; href: string }[] {
    const contentPages = this.store.pages().filter(p => !p.isLayout);
    const hrefForPage = (pageId: string | undefined): string => {
      const idx = contentPages.findIndex(p => p.id === pageId);
      if (idx < 0) return '#';
      return idx === 0 ? '/' : '/' + this.pageSlug(contentPages[idx].name);
    };
    return this.store.navLinks().map(link => {
      let href = '#';
      if (link.type === 'page') {
        href = hrefForPage(link.pageId);
      } else if (link.type === 'anchor') {
        // Même règle que le générateur : l'ancre vient de la section choisie.
        const page = contentPages.find(p => p.id === link.pageId);
        const anchor = page && link.anchorVariantId
          ? anchorsForPage(page).get(link.anchorVariantId)
          : undefined;
        const base = link.pageId ? hrefForPage(link.pageId) : '#';
        href = anchor ? `${base}#${anchor}` : base;
      } else if (link.type === 'external') {
        href = link.url?.trim() || '#';
      }
      return { label: link.label || 'Lien', href };
    });
  }

  protected readonly previewSectionCount = computed(() => {
    const contentPage = this.activePreviewPage();
    const pages = this.store.pages();
    const layoutPage = pages.find(p => p.isLayout);
    const navbarCount = layoutPage?.sections.filter(s => s.sectionType === 'navbar').length ?? 0;
    const footerCount = layoutPage?.sections.filter(s => s.sectionType === 'footer').length ?? 0;
    const contentCount = contentPage?.sections.length ?? 0;
    return navbarCount + contentCount + footerCount;
  });

  ngOnInit(): void {
    this.store.initPages();
    this.store.initNavLinks();
    this.paletteApi.getAll().subscribe(list => this.store.setCustomPalettes(list));
  }

  // ── Section labels ──────────────────────────────────────────
  protected getSectionLabel(section: PageSection): string {
    const typeName = this.typeNames[section.sectionType] ?? section.sectionType;
    const sameType = this.store.allSectionBlocks().filter(b => b.sectionType === section.sectionType);
    if (sameType.length <= 1) return typeName;
    const idx = sameType.findIndex(b => b.variantId === section.variantId);
    return `${typeName} (${idx + 1})`;
  }

  protected getSectionIcon(sectionType: string): string {
    const icons: Record<string, string> = {
      navbar: '☰', footer: '▄', hero: '★', features: '⬡',
      pricing: '◈', contact: '✉', faq: '?', blog: '▦',
      team: '◉', forms: '▣', cta: '▶', stats: '#',
    };
    return icons[sectionType] ?? '▪';
  }

  // ── Drag & drop : section cards ─────────────────────────────
  protected onSectionDragStart(pageId: string, idx: number, event: DragEvent): void {
    this.dragData = { kind: 'move', fromPageId: pageId, fromIdx: idx };
    this.draggingKey.set(`${pageId}:${idx}`);
    event.dataTransfer!.effectAllowed = 'move';
    event.dataTransfer!.setData('text/plain', '');
  }

  protected onPoolDragStart(section: PageSection, event: DragEvent): void {
    this.dragData = { kind: 'add', section };
    this.draggingKey.set(`pool:${section.variantId}`);
    event.dataTransfer!.effectAllowed = 'copy';
    event.dataTransfer!.setData('text/plain', '');
  }

  protected onCardDragOver(pageId: string, cardIdx: number, event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const el = event.currentTarget as HTMLElement;
    const { top, height } = el.getBoundingClientRect();
    const insertAt = event.clientY < top + height / 2 ? cardIdx : cardIdx + 1;
    this.dropKey.set(`${pageId}:${insertAt}`);
  }

  protected onCardDrop(pageId: string, cardIdx: number, event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const el = event.currentTarget as HTMLElement;
    const { top, height } = el.getBoundingClientRect();
    const insertAt = event.clientY < top + height / 2 ? cardIdx : cardIdx + 1;
    this.executeDrop(pageId, insertAt);
    this.clearDrag();
  }

  protected onColBodyDragOver(pageId: string, sectionCount: number, event: DragEvent): void {
    event.preventDefault();
    this.dropKey.set(`${pageId}:${sectionCount}`);
  }

  protected onColBodyDrop(pageId: string, sectionCount: number, event: DragEvent): void {
    event.preventDefault();
    this.executeDrop(pageId, sectionCount);
    this.clearDrag();
  }

  protected onDragEnd(): void { this.clearDrag(); }

  private executeDrop(pageId: string, atIdx: number): void {
    const data = this.dragData;
    if (data?.kind === 'move') {
      this.store.moveSectionBetweenPages(data.fromPageId, data.fromIdx, pageId, atIdx);
    } else if (data?.kind === 'add') {
      this.store.addSectionToPage(pageId, data.section, atIdx);
    }
  }

  private clearDrag(): void {
    this.dragData = null;
    this.draggingKey.set('');
    this.dropKey.set('');
  }

  protected isDragging(pageId: string, idx: number): boolean {
    return this.draggingKey() === `${pageId}:${idx}`;
  }

  protected isDropBefore(pageId: string, cardIdx: number): boolean {
    return this.dropKey() === `${pageId}:${cardIdx}`;
  }

  protected isDropAfter(pageId: string, cardIdx: number): boolean {
    return this.dropKey() === `${pageId}:${cardIdx + 1}`;
  }

  protected addToPage(pageId: string, section: PageSection): void {
    this.store.addSectionToPage(pageId, section);
  }

  // ── Page CRUD ───────────────────────────────────────────────
  protected addPage(): void {
    const name = this.newPageName().trim();
    if (!name) return;
    this.store.addPage(name);
    this.newPageName.set('');
  }

  protected onNewPageInput(event: Event): void {
    this.newPageName.set((event.target as HTMLInputElement).value);
  }

  protected startRename(pageId: string, currentName: string): void {
    this.editingPageId.set(pageId);
    this.editingName.set(currentName);
  }

  protected onRenameInput(event: Event): void {
    this.editingName.set((event.target as HTMLInputElement).value);
  }

  protected commitRename(pageId: string): void {
    const name = this.editingName().trim();
    if (name) this.store.renamePage(pageId, name);
    this.editingPageId.set(null);
  }

  // ── Nav links ───────────────────────────────────────────────
  protected get contentPages() {
    return this.store.pages().filter(p => !p.isLayout);
  }

  protected get isNavbarInLayout(): boolean {
    return this.store.pages()
      .find(p => p.isLayout)
      ?.sections.some(s => s.sectionType === 'navbar') ?? false;
  }

  protected onLinkTypeChange(link: NavLink, event: Event): void {
    const type = (event.target as HTMLSelectElement).value as NavLinkType;
    this.store.updateNavLink(link.id, {
      type,
      pageId: undefined,
      anchorVariantId: undefined,
      url: undefined,
    });
  }

  protected onLinkLabelInput(link: NavLink, event: Event): void {
    this.store.updateNavLink(link.id, { label: (event.target as HTMLInputElement).value });
  }

  protected onLinkPageChange(link: NavLink, event: Event): void {
    // La section ciblée appartenait à l'ancienne page : elle n'a plus de sens ici.
    const pageId = (event.target as HTMLSelectElement).value;
    const sections = this.sectionsForPage(pageId);
    this.store.updateNavLink(link.id, {
      pageId,
      anchorVariantId: link.type === 'anchor' ? sections[0]?.variantId : undefined,
    });
  }

  /** Sections assignées à une page — les cibles possibles d'un lien « ancre ». */
  protected sectionsForPage(pageId: string | undefined): PageSection[] {
    if (!pageId) return [];
    return this.store.pages().find(p => p.id === pageId)?.sections ?? [];
  }

  protected onLinkAnchorChange(link: NavLink, event: Event): void {
    this.store.updateNavLink(link.id, {
      anchorVariantId: (event.target as HTMLSelectElement).value,
    });
  }

  protected onLinkUrlInput(link: NavLink, event: Event): void {
    this.store.updateNavLink(link.id, { url: (event.target as HTMLInputElement).value });
  }

  // Nav links reorder drag
  protected onLinkDragStart(idx: number, event: DragEvent): void {
    this.linkDragIdx = idx;
    this.linkDropIdx.set(null);
    event.dataTransfer!.effectAllowed = 'move';
    event.dataTransfer!.setData('text/plain', '');
  }

  protected onLinkDragOver(idx: number, event: DragEvent): void {
    event.preventDefault();
    this.linkDropIdx.set(idx);
  }

  protected onLinkDrop(toIdx: number, event: DragEvent): void {
    event.preventDefault();
    if (this.linkDragIdx !== null && this.linkDragIdx !== toIdx) {
      this.store.reorderNavLinks(this.linkDragIdx, toIdx);
    }
    this.linkDragIdx = null;
    this.linkDropIdx.set(null);
  }

  protected onLinkDragEnd(): void {
    this.linkDragIdx = null;
    this.linkDropIdx.set(null);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.editingPageId.set(null);
    this.showCreator.set(false);
  }

  protected continue(): void { this.router.navigate(['/composer/generer']); }
}
