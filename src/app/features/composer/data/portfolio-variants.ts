import { BrickVariant } from '../../../models/brick-variant.model';

export const PORTFOLIO_VARIANTS: BrickVariant[] = [
  {
    id: 'portfolio-grille',
    name: 'Galerie de projets',
    description: 'Grille 3×2 de cartes avec aperçu coloré, titre de projet et badge de catégorie.',
    previewHtml: `
<section class="bg-white px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 flex items-end justify-between">
      <div>
        <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Portfolio</p>
        <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Nos réalisations</h2>
      </div>
      <a class="font-mono text-sm font-bold text-brand hover:text-brand/70">Voir tout →</a>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <article class="group overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-sm">
        <div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#ede9ff,#c4b5fd);display:flex;align-items:center;justify-content:center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(91,61,245,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="p-4">
          <span class="inline-block rounded-full bg-brand/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-brand mb-2">Web app</span>
          <h3 class="font-display text-sm font-bold text-ink">Dashboard analytics</h3>
          <p class="mt-1 text-xs text-ink/40">Interface de visualisation de données temps réel</p>
        </div>
      </article>
      <article class="group overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-sm">
        <div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#ecfdf5,#6ee7b7);display:flex;align-items:center;justify-content:center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(5,150,105,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="p-4">
          <span class="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-2">E-commerce</span>
          <h3 class="font-display text-sm font-bold text-ink">Boutique artisanale</h3>
          <p class="mt-1 text-xs text-ink/40">Boutique en ligne pour créateurs indépendants</p>
        </div>
      </article>
      <article class="group overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-sm">
        <div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#fffbeb,#fcd34d);display:flex;align-items:center;justify-content:center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(217,119,6,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="p-4">
          <span class="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-2">Branding</span>
          <h3 class="font-display text-sm font-bold text-ink">Identité café local</h3>
          <p class="mt-1 text-xs text-ink/40">Refonte complète de l'image d'un torréfacteur</p>
        </div>
      </article>
      <article class="group overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-sm">
        <div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#f0f9ff,#7dd3fc);display:flex;align-items:center;justify-content:center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(2,132,199,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="p-4">
          <span class="inline-block rounded-full bg-sky-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-600 mb-2">SaaS</span>
          <h3 class="font-display text-sm font-bold text-ink">Plateforme RH</h3>
          <p class="mt-1 text-xs text-ink/40">Gestion des congés et des équipes distribués</p>
        </div>
      </article>
      <article class="group overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-sm">
        <div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#fff1f2,#fda4af);display:flex;align-items:center;justify-content:center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(225,29,72,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="p-4">
          <span class="inline-block rounded-full bg-rose-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600 mb-2">Mobile</span>
          <h3 class="font-display text-sm font-bold text-ink">App bien-être</h3>
          <p class="mt-1 text-xs text-ink/40">Suivi de méditation et habitudes quotidiennes</p>
        </div>
      </article>
      <article class="group overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-sm">
        <div style="width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#f8fafc,#94a3b8);display:flex;align-items:center;justify-content:center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(71,85,105,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="p-4">
          <span class="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Dev Tool</span>
          <h3 class="font-display text-sm font-bold text-ink">CLI de déploiement</h3>
          <p class="mt-1 text-xs text-ink/40">Outil en ligne de commande pour CI/CD simplifié</p>
        </div>
      </article>
    </div>
  </div>
</section>`.trim(),
    tsx: `const projects = [
  { gradient: 'from-[#ede9ff] to-[#c4b5fd]', category: 'Web app',   categoryClass: 'bg-brand/10 text-brand',         title: 'Dashboard analytics',    desc: 'Interface de visualisation de données temps réel' },
  { gradient: 'from-[#ecfdf5] to-[#6ee7b7]', category: 'E-commerce',categoryClass: 'bg-emerald-100 text-emerald-600',  title: 'Boutique artisanale',    desc: 'Boutique en ligne pour créateurs indépendants' },
  { gradient: 'from-[#fffbeb] to-[#fcd34d]', category: 'Branding',  categoryClass: 'bg-amber-100 text-amber-600',     title: 'Identité café local',    desc: 'Refonte complète de l’image d’un torréfacteur' },
  { gradient: 'from-[#f0f9ff] to-[#7dd3fc]', category: 'SaaS',      categoryClass: 'bg-sky-100 text-sky-600',         title: 'Plateforme RH',          desc: 'Gestion des congés et des équipes distribués' },
  { gradient: 'from-[#fff1f2] to-[#fda4af]', category: 'Mobile',    categoryClass: 'bg-rose-100 text-rose-600',       title: 'App bien-être',          desc: 'Suivi de méditation et habitudes quotidiennes' },
  { gradient: 'from-[#f8fafc] to-[#94a3b8]', category: 'Dev Tool',  categoryClass: 'bg-slate-100 text-slate-500',     title: 'CLI de déploiement',     desc: 'Outil en ligne de commande pour CI/CD simplifié' },
];

export default function Portfolio() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Portfolio</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Nos réalisations</h2>
          </div>
          <a href="#" className="font-mono text-sm font-bold text-brand hover:text-brand/70">Voir tout →</a>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {projects.map(p => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-sm">
              <div className={\`w-full aspect-video bg-gradient-to-br \${p.gradient} flex items-center justify-center\`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-ink/20" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <div className="p-4">
                <span className={\`inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider mb-2 \${p.categoryClass}\`}>{p.category}</span>
                <h3 className="font-display text-sm font-bold text-ink">{p.title}</h3>
                <p className="mt-1 text-xs text-ink/40">{p.desc}</p>
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
    id: 'portfolio-cases',
    name: 'Études de cas',
    description: '2 grandes cartes côte à côte — image en haut, description détaillée en bas avec lien.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 text-center">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Études de cas</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Projets à la loupe</h2>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <article class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
        <div style="width:100%;aspect-ratio:16/10;background:linear-gradient(135deg,#ede9ff 0%,#818cf8 100%);position:relative;overflow:hidden">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div style="position:absolute;top:12px;left:12px">
            <span class="rounded-full bg-white/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">SaaS · 2024</span>
          </div>
        </div>
        <div class="flex flex-1 flex-col p-6">
          <h3 class="mb-2 font-display text-xl font-bold tracking-tight text-ink">Refonte CRM pour PME</h3>
          <p class="mb-4 flex-1 text-sm leading-relaxed text-ink/50">Une solution de gestion client entièrement repensée pour une PME industrielle. Réduction de 40% du temps de saisie grâce à l'automatisation des flux.</p>
          <div class="flex items-center justify-between border-t border-ink/[0.07] pt-5">
            <div class="flex gap-2">
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">React</span>
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">Node.js</span>
            </div>
            <a class="font-mono text-xs font-bold text-brand">Voir le cas →</a>
          </div>
        </div>
      </article>
      <article class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
        <div style="width:100%;aspect-ratio:16/10;background:linear-gradient(135deg,#ecfdf5 0%,#34d399 100%);position:relative;overflow:hidden">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div style="position:absolute;top:12px;left:12px">
            <span class="rounded-full bg-white/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">E-commerce · 2025</span>
          </div>
        </div>
        <div class="flex flex-1 flex-col p-6">
          <h3 class="mb-2 font-display text-xl font-bold tracking-tight text-ink">Boutique bio & locale</h3>
          <p class="mb-4 flex-1 text-sm leading-relaxed text-ink/50">Plateforme e-commerce sur-mesure pour un réseau de producteurs locaux. +120% de conversions versus l'ancienne solution WooCommerce.</p>
          <div class="flex items-center justify-between border-t border-ink/[0.07] pt-5">
            <div class="flex gap-2">
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">Next.js</span>
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">Stripe</span>
            </div>
            <a class="font-mono text-xs font-bold text-brand">Voir le cas →</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>`.trim(),
    tsx: `const cases = [
  {
    gradient:  'from-[#ede9ff] to-[#818cf8]',
    label:     'SaaS · 2024',
    title:     'Refonte CRM pour PME',
    desc:      'Une solution de gestion client entièrement repensée pour une PME industrielle. Réduction de 40% du temps de saisie grâce à l’automatisation des flux.',
    tags:      ['React', 'Node.js'],
  },
  {
    gradient:  'from-[#ecfdf5] to-[#34d399]',
    label:     'E-commerce · 2025',
    title:     'Boutique bio & locale',
    desc:      'Plateforme e-commerce sur-mesure pour un réseau de producteurs locaux. +120% de conversions versus l’ancienne solution WooCommerce.',
    tags:      ['Next.js', 'Stripe'],
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#eef0f5] px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Études de cas</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Projets à la loupe</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {cases.map(c => (
            <article key={c.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
              <div className={\`relative aspect-[16/10] w-full bg-gradient-to-br \${c.gradient} overflow-hidden\`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-white/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">{c.label}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-ink">{c.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-ink/50">{c.desc}</p>
                <div className="flex items-center justify-between border-t border-ink/[0.07] pt-5">
                  <div className="flex gap-2">
                    {c.tags.map(t => <span key={t} className="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">{t}</span>)}
                  </div>
                  <a href="#" className="font-mono text-xs font-bold text-brand">Voir le cas →</a>
                </div>
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
    id: 'portfolio-liste',
    name: 'Liste de réalisations',
    description: '3 projets en liste horizontale — vignette à gauche, infos et tags à droite.',
    previewHtml: `
<section class="bg-white px-8 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="mb-12">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Portfolio</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Travaux récents</h2>
    </div>
    <div class="space-y-5">
      <article class="flex gap-5 overflow-hidden rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
        <div style="width:160px;flex-shrink:0;aspect-ratio:4/3;background:linear-gradient(135deg,#ede9ff,#c4b5fd);border-radius:12px;display:flex;align-items:center;justify-content:center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(91,61,245,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="flex flex-1 flex-col justify-between min-w-0">
          <div>
            <h3 class="font-display text-base font-bold text-ink">Dashboard analytics temps réel</h3>
            <p class="mt-1 text-sm text-ink/45 leading-relaxed">Refonte complète d'un tableau de bord de suivi de KPIs pour une équipe marketing de 50 personnes. Données live via WebSocket.</p>
          </div>
          <div class="flex items-center justify-between mt-3">
            <div class="flex gap-1.5">
              <span class="rounded-md bg-brand/10 px-2 py-0.5 font-mono text-[10px] font-bold text-brand">React</span>
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">D3.js</span>
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">WebSocket</span>
            </div>
            <span class="font-mono text-xs text-brand font-bold">Voir →</span>
          </div>
        </div>
      </article>
      <article class="flex gap-5 overflow-hidden rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
        <div style="width:160px;flex-shrink:0;aspect-ratio:4/3;background:linear-gradient(135deg,#fffbeb,#fcd34d);border-radius:12px;display:flex;align-items:center;justify-content:center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(217,119,6,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="flex flex-1 flex-col justify-between min-w-0">
          <div>
            <h3 class="font-display text-base font-bold text-ink">Identité visuelle — Café Solstice</h3>
            <p class="mt-1 text-sm text-ink/45 leading-relaxed">Branding complet pour un café spécialisé : logo, charte graphique, carte, packaging sachets. Direction chaleureuse et artisanale.</p>
          </div>
          <div class="flex items-center justify-between mt-3">
            <div class="flex gap-1.5">
              <span class="rounded-md bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600">Figma</span>
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">Print</span>
            </div>
            <span class="font-mono text-xs text-brand font-bold">Voir →</span>
          </div>
        </div>
      </article>
      <article class="flex gap-5 overflow-hidden rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
        <div style="width:160px;flex-shrink:0;aspect-ratio:4/3;background:linear-gradient(135deg,#f0f9ff,#7dd3fc);border-radius:12px;display:flex;align-items:center;justify-content:center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(2,132,199,0.4)" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="flex flex-1 flex-col justify-between min-w-0">
          <div>
            <h3 class="font-display text-base font-bold text-ink">App mobile — Suivi de chantier</h3>
            <p class="mt-1 text-sm text-ink/45 leading-relaxed">Application React Native pour des artisans du BTP : photos de chantier géolocalisées, rapports PDF auto-générés, mode hors-ligne.</p>
          </div>
          <div class="flex items-center justify-between mt-3">
            <div class="flex gap-1.5">
              <span class="rounded-md bg-sky-100 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-600">React Native</span>
              <span class="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-ink/40">Expo</span>
            </div>
            <span class="font-mono text-xs text-brand font-bold">Voir →</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>`.trim(),
    tsx: `const projects = [
  {
    gradient: 'from-[#ede9ff] to-[#c4b5fd]',
    title:    'Dashboard analytics temps réel',
    desc:     'Refonte complète d’un tableau de bord de suivi de KPIs pour une équipe marketing de 50 personnes. Données live via WebSocket.',
    tags:     [{ label: 'React', className: 'bg-brand/10 text-brand font-bold' }, { label: 'D3.js' }, { label: 'WebSocket' }],
  },
  {
    gradient: 'from-[#fffbeb] to-[#fcd34d]',
    title:    'Identité visuelle — Café Solstice',
    desc:     'Branding complet pour un café spécialisé : logo, charte graphique, carte, packaging sachets. Direction chaleureuse et artisanale.',
    tags:     [{ label: 'Figma', className: 'bg-amber-100 text-amber-600 font-bold' }, { label: 'Print' }],
  },
  {
    gradient: 'from-[#f0f9ff] to-[#7dd3fc]',
    title:    'App mobile — Suivi de chantier',
    desc:     'Application React Native pour des artisans du BTP : photos géolocalisées, rapports PDF auto-générés, mode hors-ligne.',
    tags:     [{ label: 'React Native', className: 'bg-sky-100 text-sky-600 font-bold' }, { label: 'Expo' }],
  },
];

export default function Portfolio() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Portfolio</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Travaux récents</h2>
        </div>
        <div className="space-y-5">
          {projects.map(p => (
            <article key={p.title} className="flex gap-5 overflow-hidden rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className={\`flex-shrink-0 rounded-xl bg-gradient-to-br \${p.gradient} flex items-center justify-center\`} style={{ width: '160px', aspectRatio: '4/3' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-ink/20" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/45">{p.desc}</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {p.tags.map(t => (
                      <span key={t.label} className={\`rounded-md px-2 py-0.5 font-mono text-[10px] \${t.className ?? 'bg-ink/[0.05] text-ink/40'}\`}>{t.label}</span>
                    ))}
                  </div>
                  <a href="#" className="font-mono text-xs font-bold text-brand">Voir →</a>
                </div>
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
    id: 'portfolio-vitrine-sombre',
    name: 'Vitrine — fond sombre',
    description: 'Showcase produit sur fond noir : en-tête encadré de filets, grille 3 colonnes avec séparateurs, prix et bouton « Commander ». Élégance type maison de luxe.',
    previewHtml: `
<section class="relative overflow-hidden bg-[#131010] px-6 py-12">
  <div class="absolute inset-x-0 top-0 h-px" style="background:linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)"></div>
  <header class="mb-12 text-center">
    <div class="mx-auto flex max-w-sm items-center gap-4">
      <div class="h-px flex-1 bg-brand/30"></div>
      <p class="whitespace-nowrap text-[11px] uppercase tracking-[0.36em] text-brand/80">La Collection</p>
      <div class="h-px flex-1 bg-brand/30"></div>
    </div>
    <h2 class="mt-1 font-serif text-4xl font-light uppercase tracking-[0.22em] text-[#f2ede3]">Chronique</h2>
    <p class="mt-3 font-serif text-sm font-light italic text-white/45">Trois expressions d'un même terroir</p>
  </header>
  <div class="mx-auto grid max-w-4xl grid-cols-3">
    <article class="flex flex-col items-center px-8 text-center">
      <div class="flex h-[200px] w-full items-end justify-center">
        <div class="flex items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/[0.03]" style="width:78px;aspect-ratio:78/200">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </div>
      <div class="my-4 h-px w-7 bg-brand/50"></div>
      <p class="text-[11px] uppercase tracking-[0.26em] text-brand/75"><span class="mr-2 text-brand/40">I</span>Assemblage</p>
      <h3 class="mt-2 font-serif text-lg font-light tracking-wide text-[#f2ede3]">Brut</h3>
      <div class="mt-4 flex w-full items-center justify-center gap-4 border-t border-brand/15 pt-4">
        <span class="font-mono text-sm text-brand/90">23 €</span>
        <a href="#" class="text-[10px] uppercase tracking-[0.18em] text-white/55 transition hover:text-white">Commander</a>
      </div>
    </article>
    <article class="flex flex-col items-center border-l border-white/10 px-8 text-center">
      <div class="flex h-[200px] w-full items-end justify-center">
        <div class="flex items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/[0.03]" style="width:78px;aspect-ratio:78/200">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </div>
      <div class="my-4 h-px w-7 bg-brand/50"></div>
      <p class="text-[11px] uppercase tracking-[0.26em] text-brand/75"><span class="mr-2 text-brand/40">II</span>100 % Chardonnay</p>
      <h3 class="mt-2 font-serif text-lg font-light tracking-wide text-[#f2ede3]">Blanc de Blancs</h3>
      <div class="mt-4 flex w-full items-center justify-center gap-4 border-t border-brand/15 pt-4">
        <span class="font-mono text-sm text-brand/90">25 €</span>
        <a href="#" class="text-[10px] uppercase tracking-[0.18em] text-white/55 transition hover:text-white">Commander</a>
      </div>
    </article>
    <article class="flex flex-col items-center border-l border-white/10 px-8 text-center">
      <div class="flex h-[200px] w-full items-end justify-center">
        <div class="flex items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/[0.03]" style="width:78px;aspect-ratio:78/200">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </div>
      <div class="my-4 h-px w-7 bg-brand/50"></div>
      <p class="text-[11px] uppercase tracking-[0.26em] text-brand/75"><span class="mr-2 text-brand/40">III</span>100 % Pinot Noir</p>
      <h3 class="mt-2 font-serif text-lg font-light tracking-wide text-[#f2ede3]">Blanc de Noirs</h3>
      <div class="mt-4 flex w-full items-center justify-center gap-4 border-t border-brand/15 pt-4">
        <span class="font-mono text-sm text-brand/90">25 €</span>
        <a href="#" class="text-[10px] uppercase tracking-[0.18em] text-white/55 transition hover:text-white">Commander</a>
      </div>
    </article>
  </div>
  <div class="mt-10 text-center">
    <a href="#" class="inline-flex items-center gap-4 border border-brand/30 px-9 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white/70 transition hover:border-brand/60 hover:text-white">
      Explorer la collection
      <span class="h-px w-4 bg-current"></span>
    </a>
  </div>
  <div class="absolute inset-x-0 bottom-0 h-px" style="background:linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)"></div>
</section>`.trim(),
    tsx: `const items = [
  { ordinal: 'I',   tagline: 'Assemblage',      name: 'Brut',            price: '23 €' },
  { ordinal: 'II',  tagline: '100 % Chardonnay', name: 'Blanc de Blancs', price: '25 €' },
  { ordinal: 'III', tagline: '100 % Pinot Noir', name: 'Blanc de Noirs',  price: '25 €' },
];

export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-[#131010] px-6 py-12">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)' }} />
      <header className="mb-12 text-center">
        <div className="mx-auto flex max-w-sm items-center gap-4">
          <div className="h-px flex-1 bg-brand/30" />
          <p className="whitespace-nowrap text-[11px] uppercase tracking-[0.36em] text-brand/80">La Collection</p>
          <div className="h-px flex-1 bg-brand/30" />
        </div>
        <h2 className="mt-1 font-serif text-4xl font-light uppercase tracking-[0.22em] text-[#f2ede3]">Chronique</h2>
        <p className="mt-3 font-serif text-sm font-light italic text-white/45">Trois expressions d'un même terroir</p>
      </header>
      <div className="mx-auto grid max-w-4xl grid-cols-3">
        {items.map((item, i) => (
          <article
            key={item.name}
            className={i === 0 ? 'flex flex-col items-center px-8 text-center' : 'flex flex-col items-center border-l border-white/10 px-8 text-center'}
          >
            <div className="flex h-[200px] w-full items-end justify-center">
              {/* Remplacez par votre photo : <img src="..." alt={item.name} className="h-full w-auto object-contain" /> */}
              <div className="flex items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/[0.03]" style={{ width: '78px', aspectRatio: '78 / 200' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
            </div>
            <div className="my-4 h-px w-7 bg-brand/50" />
            <p className="text-[11px] uppercase tracking-[0.26em] text-brand/75">
              <span className="mr-2 text-brand/40">{item.ordinal}</span>{item.tagline}
            </p>
            <h3 className="mt-2 font-serif text-lg font-light tracking-wide text-[#f2ede3]">{item.name}</h3>
            <div className="mt-4 flex w-full items-center justify-center gap-4 border-t border-brand/15 pt-4">
              <span className="font-mono text-sm text-brand/90">{item.price}</span>
              <a href="#" className="text-[10px] uppercase tracking-[0.18em] text-white/55 transition hover:text-white">Commander</a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#" className="inline-flex items-center gap-4 border border-brand/30 px-9 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white/70 transition hover:border-brand/60 hover:text-white">
          Explorer la collection
          <span className="h-px w-4 bg-current" />
        </a>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)' }} />
    </section>
  );
}
`,
  },
];
