import { BrickVariant } from '../../../models/brick-variant.model';

export const PRODUCT_VARIANTS: BrickVariant[] = [
  {
    id: 'product-split-sombre',
    name: 'Fiche détaillée / sombre',
    description: 'Présentation produit en deux colonnes sur fond noir : visuel + ordinal géant à gauche, descriptif complet (assemblage, dégustation, prix) à droite. Pour une fiche cuvée ou produit haut de gamme.',
    previewHtml: `
<section class="bg-[#0c0c0b]">
  <div class="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-[42%_1fr]">
    <div class="relative flex items-center justify-center" style="min-height:440px">
      <div class="absolute inset-0" style="background:radial-gradient(ellipse 60% 70% at 50% 48%, rgba(191,160,106,0.07) 0%, transparent 70%)"></div>
      <div class="flex items-center justify-center rounded-lg border border-dashed border-white/12 bg-white/[0.02]" style="width:96px;aspect-ratio:96/300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </div>
      <span class="pointer-events-none absolute bottom-6 right-8 font-serif text-[120px] font-light leading-none text-white/[0.04]">III</span>
    </div>
    <div class="flex flex-col justify-center border-t border-brand/10 px-8 py-16 lg:border-l lg:border-t-0 lg:px-12">
      <p class="mb-3 font-mono text-[11px] uppercase tracking-[0.36em] text-brand/80">Champagne Flancourt</p>
      <p class="font-serif text-base font-light italic text-white/45">Chronique</p>
      <h2 class="font-serif text-4xl font-light tracking-[0.06em] text-[#f0eae0]">Blanc de Noirs</h2>
      <p class="mb-7 mt-1 font-mono text-[11px] uppercase tracking-[0.26em] text-white/45">100 % Pinot Noir</p>
      <p class="mb-8 max-w-md font-serif text-[15px] font-light italic leading-relaxed text-white/55">
        Toute la typicité crayeuse des terroirs du nord de la Montagne de Reims, dans un champagne structuré et racé.
      </p>
      <div class="mb-6">
        <div class="mb-3 flex items-center gap-3"><span class="font-mono text-[10px] uppercase tracking-[0.3em] text-brand/80">Assemblage</span><span class="h-px flex-1 bg-brand/20"></span></div>
        <p class="flex items-center gap-3 font-serif text-[15px] text-[#f0eae0]"><span class="h-1 w-1 rounded-full bg-brand/70"></span>100 % Pinot Noir</p>
        <div class="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] tracking-wide text-white/40">
          <span>Millésime 2022</span><span>Dosage : 3 g/L</span><span>36 mois sur lies</span>
        </div>
      </div>
      <div class="mb-8">
        <div class="mb-3 flex items-center gap-3"><span class="font-mono text-[10px] uppercase tracking-[0.3em] text-brand/80">Dégustation</span><span class="h-px flex-1 bg-brand/20"></span></div>
        <p class="max-w-md font-serif text-[14px] font-light leading-relaxed text-white/55">
          Robe or brillant, bulles fines et crémeuses ; nez de fruits mûrs et de brioche, bouche ample et soyeuse, finale fraîche et fruitée.
        </p>
      </div>
      <div class="flex items-center gap-6">
        <span class="font-mono text-xl text-[#f0eae0]">25 €</span>
        <a href="#" class="inline-flex items-center gap-4 border border-brand/30 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-white/70 transition hover:border-brand/60 hover:text-white">Commander<span class="h-px w-4 bg-current"></span></a>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function ProductDetail() {
  return (
    <section className="bg-[#0c0c0b]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-[42%_1fr]">
        {/* Colonne visuel */}
        <div className="relative flex items-center justify-center" style={{ minHeight: '440px' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 48%, rgba(191,160,106,0.07) 0%, transparent 70%)' }} />
          {/* Remplacez par votre photo : <img src="..." alt="Blanc de Noirs" className="h-[84%] w-auto object-contain" /> */}
          <div className="flex items-center justify-center rounded-lg border border-dashed border-white/12 bg-white/[0.02]" style={{ width: '96px', aspectRatio: '96 / 300' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <span className="pointer-events-none absolute bottom-6 right-8 font-serif text-[120px] font-light leading-none text-white/[0.04]">III</span>
        </div>
        {/* Colonne descriptif */}
        <div className="flex flex-col justify-center border-t border-brand/10 px-8 py-16 lg:border-l lg:border-t-0 lg:px-12">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.36em] text-brand/80">Champagne Flancourt</p>
          <p className="font-serif text-base font-light italic text-white/45">Chronique</p>
          <h2 className="font-serif text-4xl font-light tracking-[0.06em] text-[#f0eae0]">Blanc de Noirs</h2>
          <p className="mb-7 mt-1 font-mono text-[11px] uppercase tracking-[0.26em] text-white/45">100 % Pinot Noir</p>
          <p className="mb-8 max-w-md font-serif text-[15px] font-light italic leading-relaxed text-white/55">
            Toute la typicité crayeuse des terroirs du nord de la Montagne de Reims, dans un champagne structuré et racé.
          </p>
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand/80">Assemblage</span>
              <span className="h-px flex-1 bg-brand/20" />
            </div>
            <p className="flex items-center gap-3 font-serif text-[15px] text-[#f0eae0]">
              <span className="h-1 w-1 rounded-full bg-brand/70" />100 % Pinot Noir
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] tracking-wide text-white/40">
              <span>Millésime 2022</span><span>Dosage : 3 g/L</span><span>36 mois sur lies</span>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand/80">Dégustation</span>
              <span className="h-px flex-1 bg-brand/20" />
            </div>
            <p className="max-w-md font-serif text-[14px] font-light leading-relaxed text-white/55">
              Robe or brillant, bulles fines et crémeuses ; nez de fruits mûrs et de brioche, bouche ample et soyeuse, finale fraîche et fruitée.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xl text-[#f0eae0]">25 €</span>
            <a href="#" className="inline-flex items-center gap-4 border border-brand/30 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-white/70 transition hover:border-brand/60 hover:text-white">
              Commander<span className="h-px w-4 bg-current" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
];
