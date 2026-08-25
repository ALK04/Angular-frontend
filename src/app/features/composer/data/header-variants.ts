import { BrickVariant } from '../../../models/brick-variant.model';

export const HEADER_VARIANTS: BrickVariant[] = [
  {
    id: 'header-sombre',
    name: 'Sombre centré',
    description: 'Fond encre, titre centré, label catégorie + fil d’Ariane.',
    previewHtml: `
<section class="bg-[#14121f] py-24 text-center text-white">
  <div class="mx-auto max-w-3xl px-6">
    <p class="mb-4 font-mono text-xs uppercase tracking-widest text-white/35">À propos</p>
    <h1 class="font-display text-5xl font-bold tracking-tight leading-tight">Qui sommes-nous</h1>
    <p class="mt-5 text-lg leading-relaxed text-white/55">Notre mission, nos valeurs et l'équipe qui donne vie à ce projet depuis le premier jour.</p>
    <nav class="mt-10 flex items-center justify-center gap-2 font-mono text-xs text-white/25">
      <a href="#" class="transition hover:text-white/50">Accueil</a>
      <span aria-hidden="true">›</span>
      <span class="text-white/45">À propos</span>
    </nav>
  </div>
</section>`.trim(),
    tsx: `export default function PageHeader() {
  return (
    <section className="bg-ink py-24 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/35">À propos</p>
        <h1 className="font-display text-5xl font-bold tracking-tight leading-tight">Qui sommes-nous</h1>
        <p className="mt-5 text-lg leading-relaxed text-white/55">
          Notre mission, nos valeurs et l'équipe qui donne vie à ce projet depuis le premier jour.
        </p>
        <nav className="mt-10 flex items-center justify-center gap-2 font-mono text-xs text-white/25">
          <a href="/" className="transition hover:text-white/50">Accueil</a>
          <span aria-hidden="true">›</span>
          <span className="text-white/45">À propos</span>
        </nav>
      </div>
    </section>
  );
}
`,
  },

  {
    id: 'header-degrade',
    name: 'Gradient accent',
    description: 'Fond dégradé couleur d’accent, pill catégorie, décors géométriques.',
    previewHtml: `
<section class="relative overflow-hidden bg-brand py-24 text-center text-white">
  <div class="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/5"></div>
  <div class="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/5"></div>
  <div class="pointer-events-none absolute right-1/4 top-8 h-3 w-3 rounded-full bg-white/20"></div>
  <div class="pointer-events-none absolute left-1/3 bottom-10 h-2 w-2 rounded-full bg-white/20"></div>
  <div class="relative mx-auto max-w-3xl px-6">
    <span class="mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest backdrop-blur">Blog</span>
    <h1 class="font-display text-5xl font-bold tracking-tight leading-tight">Nos articles</h1>
    <p class="mt-5 text-lg leading-relaxed text-white/70">Conseils, tutoriels et retours d'expérience de notre équipe pour faire grandir votre projet.</p>
  </div>
</section>`.trim(),
    tsx: `export default function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-brand py-24 text-center text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/5" />
      <div className="relative mx-auto max-w-3xl px-6">
        <span className="mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest">
          Blog
        </span>
        <h1 className="font-display text-5xl font-bold tracking-tight leading-tight">Nos articles</h1>
        <p className="mt-5 text-lg leading-relaxed text-white/70">
          Conseils, tutoriels et retours d'expérience de notre équipe pour faire grandir votre projet.
        </p>
      </div>
    </section>
  );
}
`,
  },

  {
    id: 'header-clair',
    name: 'Clair éditorial',
    description: 'Fond papier, texte encre, fil d’Ariane + trait accent sous le titre.',
    previewHtml: `
<section class="border-b border-black/10 bg-[#eef0f5] py-24">
  <div class="mx-auto max-w-3xl px-6">
    <nav class="mb-6 flex items-center gap-2 font-mono text-xs text-[#14121f]/40">
      <a href="#" class="transition hover:text-[#14121f]/60">Accueil</a>
      <span aria-hidden="true">›</span>
      <span class="text-[#14121f]/60">Contact</span>
    </nav>
    <h1 class="font-display text-5xl font-bold tracking-tight text-[#14121f]">Contactez-nous</h1>
    <div class="mt-5 h-1 w-14 rounded-full bg-brand"></div>
    <p class="mt-6 max-w-xl text-lg leading-relaxed text-[#14121f]/55">Une question, un projet ? Notre équipe vous répond sous 24 h — sans engagement.</p>
  </div>
</section>`.trim(),
    tsx: `export default function PageHeader() {
  return (
    <section className="border-b border-ink/10 bg-[#eef0f5] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-ink/40">
          <a href="/" className="transition hover:text-ink/60">Accueil</a>
          <span aria-hidden="true">›</span>
          <span className="text-ink/60">Contact</span>
        </nav>
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink">Contactez-nous</h1>
        <div className="mt-5 h-1 w-14 rounded-full bg-brand" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/55">
          Une question, un projet ? Notre équipe vous répond sous 24 h — sans engagement.
        </p>
      </div>
    </section>
  );
}
`,
  },

  {
    id: 'header-maison',
    name: 'Maison / filets',
    description: 'En-tête centré sur fond noir : producteur en capitales, grand titre serif et sous-titre italique encadré de filets fins. Luxe sobre.',
    previewHtml: `
<section class="bg-[#0c0c0b] py-24 text-center">
  <p class="font-mono text-[11px] uppercase tracking-[0.4em] text-brand/80">Champagne Flancourt</p>
  <h1 class="mt-3 font-serif text-6xl font-light uppercase tracking-[0.16em] text-[#f0eae0]">La Gamme</h1>
  <div class="mt-4 flex items-center justify-center gap-4">
    <span class="h-px w-12 bg-brand/30"></span>
    <p class="font-serif text-lg font-light italic text-white/45">Chronique</p>
    <span class="h-px w-12 bg-brand/30"></span>
  </div>
</section>`.trim(),
    tsx: `export default function PageHeader() {
  return (
    <section className="bg-[#0c0c0b] py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand/80">Champagne Flancourt</p>
      <h1 className="mt-3 font-serif text-6xl font-light uppercase tracking-[0.16em] text-[#f0eae0]">La Gamme</h1>
      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-brand/30" />
        <p className="font-serif text-lg font-light italic text-white/45">Chronique</p>
        <span className="h-px w-12 bg-brand/30" />
      </div>
    </section>
  );
}
`,
  },
];
