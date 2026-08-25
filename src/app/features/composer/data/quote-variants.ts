import { BrickVariant } from '../../../models/brick-variant.model';

export const QUOTE_VARIANTS: BrickVariant[] = [
  {
    id: 'quote-editoriale',
    name: 'Citation éditoriale',
    description: 'Grande citation italique serif centrée, encadrée de deux filets d’accent, sur carte givrée. Pour une phrase de marque ou un manifeste.',
    previewHtml: `
<section class="bg-[#f5f2ec] px-8 py-24">
  <div class="mx-auto max-w-2xl">
    <div class="border border-ink/10 bg-white/60 px-10 py-14 text-center backdrop-blur lg:px-16">
      <div class="mx-auto mb-12 h-px w-8 bg-brand"></div>
      <blockquote class="font-serif text-2xl font-light italic leading-[1.45] tracking-[0.02em] text-ink sm:text-3xl">
        « Chaque bouteille est une phrase dans une longue conversation avec la vigne. »
      </blockquote>
      <div class="mx-auto mt-12 h-px w-8 bg-brand"></div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Quote() {
  return (
    <section className="bg-[#f5f2ec] px-8 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="border border-ink/10 bg-white/60 px-10 py-14 text-center backdrop-blur lg:px-16">
          <div className="mx-auto mb-12 h-px w-8 bg-brand" />
          <blockquote className="font-serif text-2xl font-light italic leading-[1.45] tracking-[0.02em] text-ink sm:text-3xl">
            « Chaque bouteille est une phrase dans une longue conversation avec la vigne. »
          </blockquote>
          <div className="mx-auto mt-12 h-px w-8 bg-brand" />
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'quote-sombre',
    name: 'Citation sombre + auteur',
    description: 'Fond noir, guillemet décoratif, citation italique claire et attribution en capitales mono sous un filet d’accent.',
    previewHtml: `
<section class="bg-[#131010] px-8 py-24 text-center">
  <div class="mx-auto max-w-2xl">
    <span class="font-serif text-6xl leading-none text-brand/40">“</span>
    <blockquote class="mt-2 font-serif text-2xl font-light italic leading-[1.5] text-[#f0eae0] sm:text-3xl">
      Faire un vin, c'est écrire une chronique du temps qu'il a fait.
    </blockquote>
    <div class="mx-auto mt-8 h-px w-10 bg-brand/40"></div>
    <p class="mt-5 font-mono text-[11px] uppercase tracking-[0.28em] text-brand/70">Quentin Richard · Vigneron</p>
  </div>
</section>`.trim(),
    tsx: `export default function Quote() {
  return (
    <section className="bg-[#131010] px-8 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <span className="font-serif text-6xl leading-none text-brand/40">“</span>
        <blockquote className="mt-2 font-serif text-2xl font-light italic leading-[1.5] text-[#f0eae0] sm:text-3xl">
          Faire un vin, c'est écrire une chronique du temps qu'il a fait.
        </blockquote>
        <div className="mx-auto mt-8 h-px w-10 bg-brand/40" />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.28em] text-brand/70">Quentin Richard · Vigneron</p>
      </div>
    </section>
  );
}
`,
  },
];
