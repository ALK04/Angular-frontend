import { BrickVariant } from '../../../models/brick-variant.model';

export const FEATURES_VARIANTS: BrickVariant[] = [
  {
    id: 'features-grille',
    name: 'Grille 3 colonnes',
    description: 'Titre centré, 3 fonctionnalités avec icône, titre et description.',
    previewHtml: `
<section class="bg-white px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="mb-12 text-center">
      <h2 class="mb-3 font-display text-3xl font-bold tracking-tight text-ink">Tout ce dont vous avez besoin</h2>
      <p class="text-sm text-ink/50">Des fonctionnalités pensées pour les développeurs et designers.</p>
    </div>
    <div class="grid gap-8 sm:grid-cols-3">
      <div class="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-6">
        <div class="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-xl">⚡</div>
        <h3 class="mb-2 font-display text-base font-bold text-ink">Ultra rapide</h3>
        <p class="text-sm leading-relaxed text-ink/50">Performances optimisées dès le départ. Chargement instantané.</p>
      </div>
      <div class="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-6">
        <div class="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-xl">🎨</div>
        <h3 class="mb-2 font-display text-base font-bold text-ink">Design flexible</h3>
        <p class="text-sm leading-relaxed text-ink/50">Personnalisez chaque détail visuel selon votre identité de marque.</p>
      </div>
      <div class="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-6">
        <div class="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-xl">🔒</div>
        <h3 class="mb-2 font-display text-base font-bold text-ink">Sécurisé</h3>
        <p class="text-sm leading-relaxed text-ink/50">Authentification et protection des données incluses par défaut.</p>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const features = [
  { icon: '⚡', title: 'Ultra rapide', desc: 'Performances optimisées dès le départ. Chargement instantané.' },
  { icon: '🎨', title: 'Design flexible', desc: 'Personnalisez chaque détail visuel selon votre identité de marque.' },
  { icon: '🔒', title: 'Sécurisé', desc: 'Authentification et protection des données incluses par défaut.' },
];

export default function Features() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-ink">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-sm text-ink/50">Des fonctionnalités pensées pour les développeurs et designers.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map(f => (
            <div key={f.title} className="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-6">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-xl">{f.icon}</div>
              <h3 className="mb-2 font-display text-base font-bold text-ink">{f.title}</h3>
              <p className="text-sm leading-relaxed text-ink/50">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'features-liste',
    name: 'Liste numérotée',
    description: 'Trois fonctionnalités en liste verticale avec de grands numéros, style éditorial.',
    previewHtml: `
<section class="bg-[#eef0f5] px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="mb-10 text-center">
      <h2 class="mb-3 font-display text-3xl font-bold tracking-tight text-ink">Pourquoi choisir Calque ?</h2>
      <p class="text-sm text-ink/50">Trois raisons de ne plus partir d'une feuille blanche.</p>
    </div>
    <div class="overflow-hidden rounded-2xl border border-ink/[0.08] bg-white divide-y divide-ink/[0.06]">
      <div class="flex items-start gap-8 px-8 py-6">
        <span class="flex-shrink-0 font-display text-5xl font-bold leading-none text-brand/20">01</span>
        <div class="pt-1">
          <h3 class="mb-1.5 font-display text-base font-bold text-ink">Structure en quelques clics</h3>
          <p class="text-sm leading-relaxed text-ink/50">Choisissez vos sections, votre palette et votre typographie. Calque assemble le projet pour vous.</p>
        </div>
      </div>
      <div class="flex items-start gap-8 px-8 py-6">
        <span class="flex-shrink-0 font-display text-5xl font-bold leading-none text-brand/20">02</span>
        <div class="pt-1">
          <h3 class="mb-1.5 font-display text-base font-bold text-ink">Code propre et maintenable</h3>
          <p class="text-sm leading-relaxed text-ink/50">Pas de magie cachée : le dossier généré est lisible, organisé et prêt à être modifié librement.</p>
        </div>
      </div>
      <div class="flex items-start gap-8 px-8 py-6">
        <span class="flex-shrink-0 font-display text-5xl font-bold leading-none text-brand/20">03</span>
        <div class="pt-1">
          <h3 class="mb-1.5 font-display text-base font-bold text-ink">Aucun lock-in</h3>
          <p class="text-sm leading-relaxed text-ink/50">Vous récupérez un dossier zip standard. Aucune dépendance à Calque : vous codez comme vous voulez.</p>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const features = [
  { n: '01', title: 'Structure en quelques clics', desc: 'Choisissez vos sections, votre palette et votre typographie. Calque assemble le projet pour vous.' },
  { n: '02', title: 'Code propre et maintenable', desc: 'Pas de magie cachée : le dossier généré est lisible, organisé et prêt à être modifié librement.' },
  { n: '03', title: 'Aucun lock-in', desc: 'Vous récupérez un dossier zip standard. Aucune dépendance à Calque : vous codez comme vous voulez.' },
];

export default function Features() {
  return (
    <section className="bg-[#eef0f5] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-ink">
            Pourquoi choisir Calque ?
          </h2>
          <p className="text-sm text-ink/50">Trois raisons de ne plus partir d'une feuille blanche.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-white divide-y divide-ink/[0.06]">
          {features.map(f => (
            <div key={f.n} className="flex items-start gap-8 px-8 py-6">
              <span className="flex-shrink-0 font-display text-5xl font-bold leading-none text-brand/20">{f.n}</span>
              <div className="pt-1">
                <h3 className="mb-1.5 font-display text-base font-bold text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-ink/50">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  },
];
