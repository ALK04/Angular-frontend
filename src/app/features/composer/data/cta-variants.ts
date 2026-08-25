import { BrickVariant } from '../../../models/brick-variant.model';

export const CTA_VARIANTS: BrickVariant[] = [
  {
    id: 'cta-banniere',
    name: 'Bannière pleine largeur',
    description: 'Fond couleur d’accent, titre percutant, sous-titre et deux boutons centrés.',
    previewHtml: `
<section class="bg-brand px-8 py-16">
  <div class="mx-auto max-w-3xl text-center">
    <p class="mb-3 font-mono text-xs uppercase tracking-widest text-white/50">Passez à l'action</p>
    <h2 class="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-white">
      Prêt à lancer votre projet ?
    </h2>
    <p class="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/65">
      Composez votre interface en quelques clics et récupérez un projet React + Node prêt à coder, sans configuration manuelle.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <a href="#" class="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-lg transition hover:bg-white/90">
        Commencer gratuitement →
      </a>
      <a href="#" class="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/60">
        Voir la démo
      </a>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function CTA() {
  return (
    <section className="bg-brand px-8 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/50">Passez à l'action</p>
        <h2 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-white">
          Prêt à lancer votre projet ?
        </h2>
        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/65">
          Composez votre interface en quelques clics et récupérez un projet React + Node prêt à coder,
          sans configuration manuelle.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-lg transition hover:bg-white/90"
          >
            Commencer gratuitement →
          </a>
          <a
            href="#"
            className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/60"
          >
            Voir la démo
          </a>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'cta-carte-luxe',
    name: 'Carte / luxe',
    description: 'Petite carte givrée centrée : label, grand titre serif et bouton contour à flèche animée. Invitation sobre et élégante.',
    previewHtml: `
<section class="bg-[#f5f2ec] px-8 py-20">
  <div class="mx-auto max-w-sm text-center">
    <div class="border border-ink/10 bg-white/60 px-10 py-14 backdrop-blur">
      <p class="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/45">La Gamme</p>
      <h2 class="mb-12 font-serif text-5xl font-light tracking-[0.12em] text-ink">Chronique</h2>
      <a href="#" class="group inline-flex items-center gap-4 border border-ink px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-[#f5f2ec]">
        Découvrir les cuvées
        <span class="h-px w-5 bg-current transition-all group-hover:w-8"></span>
      </a>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function CallToAction() {
  return (
    <section className="bg-[#f5f2ec] px-8 py-20">
      <div className="mx-auto max-w-sm text-center">
        <div className="border border-ink/10 bg-white/60 px-10 py-14 backdrop-blur">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/45">La Gamme</p>
          <h2 className="mb-12 font-serif text-5xl font-light tracking-[0.12em] text-ink">Chronique</h2>
          <a
            href="#"
            className="group inline-flex items-center gap-4 border border-ink px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-[#f5f2ec]"
          >
            Découvrir les cuvées
            <span className="h-px w-5 bg-current transition-all group-hover:w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
`,
  },
];
