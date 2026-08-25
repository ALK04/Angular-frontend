import { BrickVariant } from '../../../models/brick-variant.model';

export const LOGOS_VARIANTS: BrickVariant[] = [
  {
    id: 'logos-bande',
    name: 'Bande partenaires',
    description: '5 logos-wordmarks en grisé sur fond blanc, alignés en ligne avec un sous-titre discret.',
    previewHtml: `
<section class="bg-white py-16">
  <div class="mx-auto max-w-5xl px-8">
    <p class="mb-12 text-center font-mono text-xs uppercase tracking-widest text-ink/[0.2]">Ils nous font confiance</p>
    <div class="flex items-center justify-around gap-8">
      <div class="flex items-center gap-2.5 opacity-[0.22]">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect width="26" height="26" rx="6" fill="#14121f"/><path d="M7 13h12M13 7v12" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>
        <span class="font-display text-xl font-black tracking-tight text-ink">Nexify</span>
      </div>
      <div class="flex items-center gap-2.5 opacity-[0.22]">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="12" fill="#14121f"/><circle cx="13" cy="13" r="5" fill="white"/></svg>
        <span class="font-display text-xl font-black tracking-tighter text-ink">Craftly</span>
      </div>
      <div class="flex items-center gap-2.5 opacity-[0.22]">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><polygon points="13,2 25,24 1,24" fill="#14121f"/></svg>
        <span class="font-display text-2xl font-black tracking-tight text-ink">Axiom</span>
      </div>
      <div class="flex items-center gap-2.5 opacity-[0.22]">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 2 L24 8.5 V17.5 L13 24 L2 17.5 V8.5 Z" fill="#14121f"/></svg>
        <span class="font-display text-xl font-black tracking-tight text-ink">Vivido</span>
      </div>
      <div class="flex items-center gap-2.5 opacity-[0.22]">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect width="26" height="26" rx="8" fill="#14121f"/><rect x="6" y="6" width="14" height="14" rx="4" fill="white"/></svg>
        <span class="font-display text-xl font-black tracking-tight text-ink">Pulsar</span>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const logos = [
  { name: 'Nexify',  icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect width="26" height="26" rx="6" fill="#14121f"/><path d="M7 13h12M13 7v12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg> },
  { name: 'Craftly', icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="12" fill="#14121f"/><circle cx="13" cy="13" r="5" fill="white"/></svg> },
  { name: 'Axiom',   icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><polygon points="13,2 25,24 1,24" fill="#14121f"/></svg> },
  { name: 'Vivido',  icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 2 L24 8.5 V17.5 L13 24 L2 17.5 V8.5 Z" fill="#14121f"/></svg> },
  { name: 'Pulsar',  icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect width="26" height="26" rx="8" fill="#14121f"/><rect x="6" y="6" width="14" height="14" rx="4" fill="white"/></svg> },
];

export default function Logos() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-8">
        <p className="mb-12 text-center font-mono text-xs uppercase tracking-widest text-ink/[0.2]">
          Ils nous font confiance
        </p>
        <div className="flex items-center justify-around gap-8">
          {logos.map(l => (
            <div key={l.name} className="flex items-center gap-2.5 opacity-[0.22]">
              {l.icon}
              <span className="font-display text-xl font-black tracking-tight text-ink">{l.name}</span>
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
    id: 'logos-sombre',
    name: 'Logos fond sombre',
    description: 'Bande sombre premium : 5 logos blancs translucides avec séparateurs verticaux fins.',
    previewHtml: `
<section class="bg-[#0f0d1a] py-16">
  <div class="mx-auto max-w-5xl px-8">
    <p class="mb-12 text-center font-mono text-xs uppercase tracking-widest text-white/[0.2]">Rejoignez 500+ équipes qui nous font confiance</p>
    <div class="grid grid-cols-5 divide-x divide-white/[0.07]">
      <div class="flex flex-col items-center gap-3 px-6 py-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="opacity-30"><rect width="32" height="32" rx="8" fill="white"/><path d="M8 16h16M16 8v16" stroke="#0f0d1a" stroke-width="3" stroke-linecap="round"/></svg>
        <span class="font-display text-base font-black tracking-tight text-white/30">Nexify</span>
      </div>
      <div class="flex flex-col items-center gap-3 px-6 py-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="opacity-30"><circle cx="16" cy="16" r="14" fill="white"/><circle cx="16" cy="16" r="6" fill="#0f0d1a"/></svg>
        <span class="font-display text-base font-black tracking-tighter text-white/30">Craftly</span>
      </div>
      <div class="flex flex-col items-center gap-3 px-6 py-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,3 30,29 2,29" fill="white" fill-opacity="0.3"/></svg>
        <span class="font-display text-base font-black tracking-tight text-white/30">Axiom</span>
      </div>
      <div class="flex flex-col items-center gap-3 px-6 py-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 2 L30 10 V22 L16 30 L2 22 V10 Z" fill="white" fill-opacity="0.3"/></svg>
        <span class="font-display text-base font-black tracking-tight text-white/30">Vivido</span>
      </div>
      <div class="flex flex-col items-center gap-3 px-6 py-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="opacity-30"><rect width="32" height="32" rx="9" fill="white"/><rect x="7" y="7" width="18" height="18" rx="5" fill="#0f0d1a"/></svg>
        <span class="font-display text-base font-black tracking-tight text-white/30">Pulsar</span>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const logos = [
  { name: 'Nexify',  icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="white"/><path d="M8 16h16M16 8v16" stroke="#0f0d1a" strokeWidth="3" strokeLinecap="round"/></svg> },
  { name: 'Craftly', icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="white"/><circle cx="16" cy="16" r="6" fill="#0f0d1a"/></svg> },
  { name: 'Axiom',   icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,3 30,29 2,29" fill="white"/></svg> },
  { name: 'Vivido',  icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 2 L30 10 V22 L16 30 L2 22 V10 Z" fill="white"/></svg> },
  { name: 'Pulsar',  icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="9" fill="white"/><rect x="7" y="7" width="18" height="18" rx="5" fill="#0f0d1a"/></svg> },
];

export default function Logos() {
  return (
    <section className="bg-[#0f0d1a] py-16">
      <div className="mx-auto max-w-5xl px-8">
        <p className="mb-12 text-center font-mono text-xs uppercase tracking-widest text-white/[0.2]">
          Rejoignez 500+ équipes qui nous font confiance
        </p>
        <div className="grid grid-cols-5 divide-x divide-white/[0.07]">
          {logos.map(l => (
            <div key={l.name} className="flex flex-col items-center gap-3 px-6 py-4">
              <div className="opacity-30">{l.icon}</div>
              <span className="font-display text-base font-black tracking-tight text-white/30">{l.name}</span>
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
    id: 'logos-presse',
    name: 'Mentions presse',
    description: '4 médias avec extrait de citation en italique sous chaque logo — idéal pour startups.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 text-center">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">On en parle</p>
      <h2 class="font-display text-2xl font-bold tracking-tight text-ink">Ils nous ont remarqués</h2>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 font-display text-lg font-black tracking-tighter text-ink/30">The Verge</div>
        <p class="text-xs italic leading-relaxed text-ink/40">"Un outil qui redéfinit la façon dont les développeurs démarrent leurs projets."</p>
      </div>
      <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 font-display text-xl font-black uppercase tracking-[0.1em] text-ink/30">WIRED</div>
        <p class="text-xs italic leading-relaxed text-ink/40">"Calque rend le scaffolding accessible à tous, sans sacrifier la qualité du code."</p>
      </div>
      <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 font-display text-lg font-black italic tracking-tight text-ink/30">Forbes</div>
        <p class="text-xs italic leading-relaxed text-ink/40">"L'outil que chaque freelance devrait avoir dans sa boîte à outils en 2025."</p>
      </div>
      <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-ink/30">ProductHunt</div>
        <p class="text-xs italic leading-relaxed text-ink/40">"#1 du jour — une idée simple exécutée à la perfection. Bravo à l'équipe."</p>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const mentions = [
  { outlet: 'The Verge',   style: 'font-display text-lg font-black tracking-tighter',    quote: 'Un outil qui redéfinit la façon dont les développeurs démarrent leurs projets.' },
  { outlet: 'WIRED',       style: 'font-display text-xl font-black uppercase tracking-[0.1em]', quote: 'Calque rend le scaffolding accessible à tous, sans sacrifier la qualité.' },
  { outlet: 'Forbes',      style: 'font-display text-lg font-black italic tracking-tight', quote: 'L’outil que chaque freelance devrait avoir dans sa boîte à outils en 2025.' },
  { outlet: 'ProductHunt', style: 'font-mono text-sm font-bold uppercase tracking-widest', quote: '#1 du jour — une idée simple exécutée à la perfection. Bravo à l’équipe.' },
];

export default function Logos() {
  return (
    <section className="bg-[#eef0f5] px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">On en parle</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Ils nous ont remarqués</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {mentions.map(m => (
            <div key={m.outlet} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className={\`mb-4 text-ink/30 \${m.style}\`}>{m.outlet}</div>
              <p className="text-xs italic leading-relaxed text-ink/40">"{m.quote}"</p>
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
