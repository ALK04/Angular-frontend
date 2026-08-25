import { BrickVariant } from '../../../models/brick-variant.model';

export const BLOG_VARIANTS: BrickVariant[] = [
  {
    id: 'blog-grille',
    name: 'Grille 3 colonnes',
    description: '3 articles en grille avec image, catégorie, titre, extrait et méta.',
    previewHtml: `
<section class="bg-white px-8 py-14">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10 flex items-end justify-between">
      <div>
        <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Blog</p>
        <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Derniers articles</h2>
      </div>
      <a href="#" class="text-sm font-semibold text-brand transition hover:opacity-70">Voir tout →</a>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <article class="group flex flex-col">
        <div class="mb-4 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-ink/[0.04]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-ink/20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <span class="mb-2 inline-block self-start rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">Design</span>
        <h3 class="mb-2 flex-1 font-display text-sm font-bold leading-snug text-ink transition group-hover:text-brand">Scaffolder un projet React en 3 minutes avec Calque</h3>
        <p class="mb-3 text-xs leading-relaxed text-ink/45 line-clamp-2">Découvrez comment Calque génère pour vous la structure complète d'un projet prêt à personnaliser.</p>
        <div class="flex items-center gap-2 text-xs text-ink/25">
          <span>12 juin 2025</span><span aria-hidden="true">·</span><span>4 min</span>
        </div>
      </article>
      <article class="group flex flex-col">
        <div class="mb-4 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-brand/[0.07]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-brand/30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <span class="mb-2 inline-block self-start rounded-full bg-ink/[0.06] px-2.5 py-0.5 text-xs font-semibold text-ink/50">Tailwind</span>
        <h3 class="mb-2 flex-1 font-display text-sm font-bold leading-snug text-ink transition group-hover:text-brand">Choisir sa palette de couleurs sans se tromper</h3>
        <p class="mb-3 text-xs leading-relaxed text-ink/45 line-clamp-2">Les bonnes pratiques pour définir un système de couleurs cohérent dès le démarrage.</p>
        <div class="flex items-center gap-2 text-xs text-ink/25">
          <span>5 juin 2025</span><span aria-hidden="true">·</span><span>3 min</span>
        </div>
      </article>
      <article class="group flex flex-col">
        <div class="mb-4 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-ink/[0.04]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-ink/20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <span class="mb-2 inline-block self-start rounded-full bg-ink/[0.06] px-2.5 py-0.5 text-xs font-semibold text-ink/50">Express</span>
        <h3 class="mb-2 flex-1 font-display text-sm font-bold leading-snug text-ink transition group-hover:text-brand">Structurer une API Express propre dès le départ</h3>
        <p class="mb-3 text-xs leading-relaxed text-ink/45 line-clamp-2">Routes, middlewares, validation — les patterns à adopter avant d'écrire la moindre ligne métier.</p>
        <div class="flex items-center gap-2 text-xs text-ink/25">
          <span>28 mai 2025</span><span aria-hidden="true">·</span><span>6 min</span>
        </div>
      </article>
    </div>
  </div>
</section>`.trim(),
    tsx: `const articles = [
  { category: 'Design',   bg: 'bg-ink/[0.04]',    title: 'Scaffolder un projet React en 3 minutes avec Calque',      excerpt: "Découvrez comment Calque génère pour vous la structure complète d'un projet prêt à personnaliser.", date: '12 juin 2025', read: '4 min' },
  { category: 'Tailwind', bg: 'bg-brand/[0.07]',  title: 'Choisir sa palette de couleurs sans se tromper',            excerpt: 'Les bonnes pratiques pour définir un système de couleurs cohérent dès le démarrage.',              date: '5 juin 2025',  read: '3 min' },
  { category: 'Express',  bg: 'bg-ink/[0.04]',    title: 'Structurer une API Express propre dès le départ',           excerpt: 'Routes, middlewares, validation — les patterns à adopter avant d’écrire la moindre ligne métier.', date: '28 mai 2025',  read: '6 min' },
];

export default function Blog() {
  return (
    <section className="bg-white px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Blog</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Derniers articles</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-brand transition hover:opacity-70">Voir tout →</a>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {articles.map(a => (
            <article key={a.title} className="group flex flex-col">
              <div className={\`mb-4 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl \${a.bg}\`}>
                {/* Remplacer par <img src={...} alt={a.title} className="h-full w-full object-cover" /> */}
              </div>
              <span className="mb-2 inline-block self-start rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">{a.category}</span>
              <h3 className="mb-2 flex-1 font-display text-sm font-bold leading-snug text-ink transition group-hover:text-brand">{a.title}</h3>
              <p className="mb-3 text-xs leading-relaxed text-ink/45 line-clamp-2">{a.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-ink/25">
                <span>{a.date}</span><span>·</span><span>{a.read}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'blog-featured',
    name: 'À la une',
    description: 'Un grand article mis en avant à gauche, deux articles secondaires empilés à droite.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-14">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Articles</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">À la une</h2>
    </div>
    <div class="grid grid-cols-5 gap-6">
      <article class="col-span-3 group flex flex-col">
        <div class="mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-ink/15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <span class="mb-2 inline-block self-start rounded-full bg-brand/10 px-3 py-0.5 text-xs font-semibold text-brand">Tutoriel</span>
        <h3 class="mb-3 font-display text-xl font-bold leading-snug text-ink transition group-hover:text-brand">Scaffolder un projet React + Express en 3 minutes avec Calque</h3>
        <p class="mb-4 text-sm leading-relaxed text-ink/50">Découvrez comment Calque génère pour vous la structure complète d'un projet React / Node.js, prêt à personnaliser, sans configuration manuelle.</p>
        <div class="flex items-center gap-2 text-xs text-ink/30">
          <span>12 juin 2025</span><span>·</span><span>4 min de lecture</span>
        </div>
      </article>
      <div class="col-span-2 flex flex-col gap-4">
        <article class="group flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
          <div class="flex aspect-square w-20 flex-shrink-0 items-center justify-center rounded-xl bg-brand/[0.07]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-brand/30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div class="min-w-0">
            <span class="mb-1 block text-xs font-semibold text-brand">Tailwind</span>
            <h3 class="mb-1 font-display text-sm font-bold leading-snug text-ink group-hover:text-brand transition line-clamp-2">Choisir sa palette de couleurs sans se tromper</h3>
            <div class="text-xs text-ink/30">5 juin · 3 min</div>
          </div>
        </article>
        <article class="group flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
          <div class="flex aspect-square w-20 flex-shrink-0 items-center justify-center rounded-xl bg-ink/[0.04]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-ink/20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div class="min-w-0">
            <span class="mb-1 block text-xs font-semibold text-ink/40">Express</span>
            <h3 class="mb-1 font-display text-sm font-bold leading-snug text-ink group-hover:text-brand transition line-clamp-2">Structurer une API Express propre dès le départ</h3>
            <div class="text-xs text-ink/30">28 mai · 6 min</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const featured = {
  category: 'Tutoriel',
  title: 'Scaffolder un projet React + Express en 3 minutes avec Calque',
  excerpt: "Découvrez comment Calque génère pour vous la structure complète d'un projet React / Node.js, prêt à personnaliser, sans configuration manuelle.",
  date: '12 juin 2025', read: '4 min de lecture',
};

const secondary = [
  { category: 'Tailwind', title: 'Choisir sa palette de couleurs sans se tromper', date: '5 juin', read: '3 min' },
  { category: 'Express',  title: 'Structurer une API Express propre dès le départ', date: '28 mai', read: '6 min' },
];

export default function Blog() {
  return (
    <section className="bg-[#eef0f5] px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Articles</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">À la une</h2>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <article className="col-span-3 group flex flex-col">
            <div className="mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* <img src={...} alt={featured.title} className="h-full w-full object-cover" /> */}
            </div>
            <span className="mb-2 inline-block self-start rounded-full bg-brand/10 px-3 py-0.5 text-xs font-semibold text-brand">{featured.category}</span>
            <h3 className="mb-3 font-display text-xl font-bold leading-snug text-ink group-hover:text-brand transition">{featured.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-ink/50">{featured.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-ink/30">
              <span>{featured.date}</span><span>·</span><span>{featured.read}</span>
            </div>
          </article>
          <div className="col-span-2 flex flex-col gap-4">
            {secondary.map(a => (
              <article key={a.title} className="group flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="aspect-square w-20 flex-shrink-0 overflow-hidden rounded-xl bg-brand/[0.07]">
                  {/* <img src={...} alt={a.title} className="h-full w-full object-cover" /> */}
                </div>
                <div className="min-w-0">
                  <span className="mb-1 block text-xs font-semibold text-brand">{a.category}</span>
                  <h3 className="mb-1 font-display text-sm font-bold leading-snug text-ink group-hover:text-brand transition line-clamp-2">{a.title}</h3>
                  <div className="text-xs text-ink/30">{a.date} · {a.read}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'blog-liste',
    name: 'Liste magazine',
    description: 'Articles en liste horizontale avec vignette carrée à gauche, style éditorial sobre.',
    previewHtml: `
<section class="bg-white px-8 py-12">
  <div class="mx-auto max-w-4xl">
    <div class="mb-8 flex items-end justify-between border-b border-ink/[0.08] pb-6">
      <div>
        <p class="mb-1 font-mono text-xs uppercase tracking-widest text-brand">Blog</p>
        <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Tous les articles</h2>
      </div>
      <div class="flex gap-3 text-xs">
        <button class="rounded-full bg-brand/10 px-3 py-1.5 font-semibold text-brand">Tous</button>
        <button class="rounded-full px-3 py-1.5 font-medium text-ink/40 hover:text-ink">Design</button>
        <button class="rounded-full px-3 py-1.5 font-medium text-ink/40 hover:text-ink">Code</button>
      </div>
    </div>
    <div class="divide-y divide-ink/[0.06]">
      <article class="group flex items-center gap-6 py-5">
        <div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-brand/[0.07]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-brand/30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="min-w-0 flex-1">
          <span class="mb-1 block text-xs font-semibold text-brand">Tutoriel</span>
          <h3 class="mb-1 font-display text-base font-bold text-ink transition group-hover:text-brand">Scaffolder un projet React + Express en 3 minutes</h3>
          <p class="text-sm text-ink/45 line-clamp-1">Découvrez comment Calque génère la structure complète d'un projet prêt à personnaliser.</p>
        </div>
        <div class="flex-shrink-0 text-right text-xs text-ink/25">
          <div>12 juin 2025</div>
          <div class="mt-0.5">4 min</div>
        </div>
      </article>
      <article class="group flex items-center gap-6 py-5">
        <div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-ink/[0.04]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-ink/20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="min-w-0 flex-1">
          <span class="mb-1 block text-xs font-semibold text-ink/40">Tailwind</span>
          <h3 class="mb-1 font-display text-base font-bold text-ink transition group-hover:text-brand">Choisir sa palette de couleurs sans se tromper</h3>
          <p class="text-sm text-ink/45 line-clamp-1">Les bonnes pratiques pour définir un système de couleurs cohérent dès le démarrage.</p>
        </div>
        <div class="flex-shrink-0 text-right text-xs text-ink/25">
          <div>5 juin 2025</div>
          <div class="mt-0.5">3 min</div>
        </div>
      </article>
      <article class="group flex items-center gap-6 py-5">
        <div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-ink/[0.04]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-ink/20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="min-w-0 flex-1">
          <span class="mb-1 block text-xs font-semibold text-ink/40">Express</span>
          <h3 class="mb-1 font-display text-base font-bold text-ink transition group-hover:text-brand">Structurer une API Express propre dès le départ</h3>
          <p class="text-sm text-ink/45 line-clamp-1">Routes, middlewares, validation — les patterns à adopter avant d'écrire la moindre ligne métier.</p>
        </div>
        <div class="flex-shrink-0 text-right text-xs text-ink/25">
          <div>28 mai 2025</div>
          <div class="mt-0.5">6 min</div>
        </div>
      </article>
    </div>
  </div>
</section>`.trim(),
    tsx: `const articles = [
  { category: 'Tutoriel', categoryColor: 'text-brand',    title: 'Scaffolder un projet React + Express en 3 minutes', excerpt: "Découvrez comment Calque génère la structure complète d'un projet prêt à personnaliser.", date: '12 juin 2025', read: '4 min', thumbBg: 'bg-brand/[0.07]' },
  { category: 'Tailwind', categoryColor: 'text-ink/40',   title: 'Choisir sa palette de couleurs sans se tromper',    excerpt: 'Les bonnes pratiques pour définir un système de couleurs cohérent dès le démarrage.',  date: '5 juin 2025',  read: '3 min', thumbBg: 'bg-ink/[0.04]'   },
  { category: 'Express',  categoryColor: 'text-ink/40',   title: 'Structurer une API Express propre dès le départ',  excerpt: "Routes, middlewares, validation — les patterns à adopter avant d'écrire la moindre ligne métier.", date: '28 mai 2025', read: '6 min', thumbBg: 'bg-ink/[0.04]' },
];

export default function Blog() {
  return (
    <section className="bg-white px-8 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-end justify-between border-b border-ink/[0.08] pb-6">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-brand">Blog</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Tous les articles</h2>
          </div>
          <div className="flex gap-3 text-xs">
            <button className="rounded-full bg-brand/10 px-3 py-1.5 font-semibold text-brand">Tous</button>
            <button className="rounded-full px-3 py-1.5 font-medium text-ink/40 hover:text-ink">Design</button>
            <button className="rounded-full px-3 py-1.5 font-medium text-ink/40 hover:text-ink">Code</button>
          </div>
        </div>
        <div className="divide-y divide-ink/[0.06]">
          {articles.map(a => (
            <article key={a.title} className="group flex items-center gap-6 py-5">
              <div className={\`flex h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl \${a.thumbBg}\`}>
                {/* <img src={...} alt={a.title} className="h-full w-full object-cover" /> */}
              </div>
              <div className="min-w-0 flex-1">
                <span className={\`mb-1 block text-xs font-semibold \${a.categoryColor}\`}>{a.category}</span>
                <h3 className="mb-1 font-display text-base font-bold text-ink transition group-hover:text-brand">{a.title}</h3>
                <p className="text-sm text-ink/45 line-clamp-1">{a.excerpt}</p>
              </div>
              <div className="flex-shrink-0 text-right text-xs text-ink/25">
                <div>{a.date}</div>
                <div className="mt-0.5">{a.read}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  },
];
