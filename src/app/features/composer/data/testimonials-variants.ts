import { BrickVariant } from '../../../models/brick-variant.model';

export const TESTIMONIALS_VARIANTS: BrickVariant[] = [
  {
    id: 'testimonials-grille',
    name: 'Grille 2 colonnes',
    description: '2 cartes côte à côte avec étoiles, citation et auteur, sur fond gris doux.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-14">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Témoignages</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Ils nous font confiance</h2>
    </div>
    <div class="grid grid-cols-2 gap-5">
      <div class="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-4 flex gap-0.5 text-brand text-sm">★★★★★</div>
        <p class="mb-6 flex-1 text-sm leading-relaxed text-ink/60">"Calque m'a fait gagner deux jours sur le setup. Je dépose le ZIP, j'installe les dépendances et je code — exactement ce que je voulais."</p>
        <div class="flex items-center gap-3 border-t border-ink/[0.06] pt-5">
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 font-display text-xs font-bold text-brand">AS</div>
          <div>
            <div class="text-sm font-bold text-ink">Alexis Sorel</div>
            <div class="text-xs text-ink/40">Développeur freelance · Paris</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-4 flex gap-0.5 text-brand text-sm">★★★★★</div>
        <p class="mb-6 flex-1 text-sm leading-relaxed text-ink/60">"Le code généré est propre, lisible et bien organisé. J'ai pu l'adapter à mon projet sans en comprendre les rouages au préalable."</p>
        <div class="flex items-center gap-3 border-t border-ink/[0.06] pt-5">
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-display text-xs font-bold" style="background:#fef3c7;color:#d97706">ML</div>
          <div>
            <div class="text-sm font-bold text-ink">Marie Leclercq</div>
            <div class="text-xs text-ink/40">Lead dev · Startup SaaS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const reviews = [
  {
    quote: "Calque m'a fait gagner deux jours sur le setup. Je dépose le ZIP, j'installe les dépendances et je code — exactement ce que je voulais.",
    initials: 'AS', name: 'Alexis Sorel', role: 'Développeur freelance · Paris',
    avatarStyle: { background: '#ede9ff', color: '#5b3df5' },
  },
  {
    quote: "Le code généré est propre, lisible et bien organisé. J'ai pu l'adapter à mon projet sans en comprendre les rouages au préalable.",
    initials: 'ML', name: 'Marie Leclercq', role: 'Lead dev · Startup SaaS',
    avatarStyle: { background: '#fef3c7', color: '#d97706' },
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#eef0f5] px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Témoignages</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Ils nous font confiance</h2>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-0.5 text-brand text-sm">★★★★★</div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-ink/60">"{r.quote}"</p>
              <div className="flex items-center gap-3 border-t border-ink/[0.06] pt-5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-display text-xs font-bold" style={r.avatarStyle}>
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{r.name}</div>
                  <div className="text-xs text-ink/40">{r.role}</div>
                </div>
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
  {
    id: 'testimonials-citation',
    name: 'Citation vedette',
    description: 'Une seule citation mise en avant, centrée, avec grandes guillemets et points de navigation.',
    previewHtml: `
<section class="bg-white px-8 py-20">
  <div class="mx-auto max-w-2xl text-center">
    <div class="mb-4 flex justify-center gap-0.5 text-brand">★★★★★</div>
    <div class="mb-5 font-display text-7xl font-bold leading-none text-brand/15">"</div>
    <p class="mb-8 font-display text-xl font-medium leading-relaxed text-ink">
      Calque m'a fait gagner deux jours sur le setup. Je récupère un projet propre, structuré, et je commence à coder tout de suite sans partir d'une feuille blanche.
    </p>
    <div class="flex items-center justify-center gap-4">
      <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 font-display text-sm font-bold text-brand">AS</div>
      <div class="text-left">
        <div class="font-bold text-ink">Alexis Sorel</div>
        <div class="text-xs text-ink/40">Développeur freelance · Paris</div>
      </div>
    </div>
    <div class="mt-10 flex items-center justify-center gap-2">
      <span class="h-2 w-7 rounded-full bg-brand"></span>
      <span class="h-2 w-2 rounded-full bg-ink/15"></span>
      <span class="h-2 w-2 rounded-full bg-ink/15"></span>
    </div>
  </div>
</section>`.trim(),
    tsx: `const reviews = [
  {
    quote: "Calque m'a fait gagner deux jours sur le setup. Je récupère un projet propre, structuré, et je commence à coder tout de suite sans partir d'une feuille blanche.",
    initials: 'AS', name: 'Alexis Sorel', role: 'Développeur freelance · Paris',
  },
  // Ajouter d'autres témoignages ici...
];

export default function Testimonials() {
  // Implémenter le carousel avec useState / useRef selon vos besoins
  const active = reviews[0];
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-4 flex justify-center gap-0.5 text-brand">★★★★★</div>
        <div className="mb-5 font-display text-7xl font-bold leading-none text-brand/15">"</div>
        <p className="mb-8 font-display text-xl font-medium leading-relaxed text-ink">
          {active.quote}
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 font-display text-sm font-bold text-brand">
            {active.initials}
          </div>
          <div className="text-left">
            <div className="font-bold text-ink">{active.name}</div>
            <div className="text-xs text-ink/40">{active.role}</div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
            <span key={i} className={\`h-2 rounded-full \${i === 0 ? 'w-7 bg-brand' : 'w-2 bg-ink/15'}\`} />
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'testimonials-sombre',
    name: 'Bande sombre',
    description: '3 citations compactes sur fond sombre, sans étoiles, style sobre et percutant.',
    previewHtml: `
<section class="bg-[#0f0d1a] px-8 py-14">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Ce qu'ils disent</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-white">3 développeurs, un même retour.</h2>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
        <p class="mb-5 text-sm leading-relaxed text-white/55">"Calque m'a fait gagner deux jours sur le setup. Je dépose le ZIP, j'installe, je code."</p>
        <div class="flex items-center gap-3">
          <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/25 font-display text-xs font-bold text-brand">AS</div>
          <div>
            <div class="text-xs font-bold text-white/80">Alexis Sorel</div>
            <div class="text-xs text-white/30">Dev freelance</div>
          </div>
        </div>
      </div>
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
        <p class="mb-5 text-sm leading-relaxed text-white/55">"Code propre, bien organisé. Je l'ai adapté à mon projet sans difficulté et ça tourne en prod."</p>
        <div class="flex items-center gap-3">
          <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-display text-xs font-bold" style="background:rgba(217,119,6,0.25);color:#fbbf24">ML</div>
          <div>
            <div class="text-xs font-bold text-white/80">Marie Leclercq</div>
            <div class="text-xs text-white/30">Lead dev · SaaS</div>
          </div>
        </div>
      </div>
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
        <p class="mb-5 text-sm leading-relaxed text-white/55">"Le meilleur outil pour démarrer un projet sans passer des heures à configurer Vite et Tailwind."</p>
        <div class="flex items-center gap-3">
          <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-display text-xs font-bold" style="background:rgba(16,185,129,0.2);color:#34d399">TR</div>
          <div>
            <div class="text-xs font-bold text-white/80">Thomas Renard</div>
            <div class="text-xs text-white/30">Fondateur indie</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const reviews = [
  {
    quote: "Calque m'a fait gagner deux jours sur le setup. Je dépose le ZIP, j'installe, je code.",
    initials: 'AS', name: 'Alexis Sorel', role: 'Dev freelance',
    avatarStyle: { background: 'rgba(91,61,245,0.25)', color: '#a78bfa' },
  },
  {
    quote: "Code propre, bien organisé. Je l'ai adapté à mon projet sans difficulté et ça tourne en prod.",
    initials: 'ML', name: 'Marie Leclercq', role: 'Lead dev · SaaS',
    avatarStyle: { background: 'rgba(217,119,6,0.25)', color: '#fbbf24' },
  },
  {
    quote: "Le meilleur outil pour démarrer un projet sans passer des heures à configurer Vite et Tailwind.",
    initials: 'TR', name: 'Thomas Renard', role: 'Fondateur indie',
    avatarStyle: { background: 'rgba(16,185,129,0.2)', color: '#34d399' },
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0f0d1a] px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Ce qu'ils disent</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white">
            3 développeurs, un même retour.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
              <p className="mb-5 text-sm leading-relaxed text-white/55">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-display text-xs font-bold" style={r.avatarStyle}>
                  {r.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white/80">{r.name}</div>
                  <div className="text-xs text-white/30">{r.role}</div>
                </div>
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
