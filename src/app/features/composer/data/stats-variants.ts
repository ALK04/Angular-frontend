import { BrickVariant } from '../../../models/brick-variant.model';

export const STATS_VARIANTS: BrickVariant[] = [
  {
    id: 'stats-ligne',
    name: 'Chiffres en ligne',
    description: '3 métriques clés côte à côte, séparées par des lignes verticales, sur fond blanc.',
    previewHtml: `
<section class="bg-white px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <p class="mb-3 font-mono text-xs uppercase tracking-widest text-brand">En chiffres</p>
    <h2 class="mb-14 font-display text-3xl font-bold tracking-tight text-ink">Des résultats concrets</h2>
    <div class="grid grid-cols-3 divide-x divide-ink/[0.08]">
      <div class="px-8">
        <span class="block font-display text-5xl font-bold text-brand">10k+</span>
        <span class="mt-3 block text-sm text-ink/50">Projets générés</span>
      </div>
      <div class="px-8">
        <span class="block font-display text-5xl font-bold text-brand">98%</span>
        <span class="mt-3 block text-sm text-ink/50">Taux de satisfaction</span>
      </div>
      <div class="px-8">
        <span class="block font-display text-5xl font-bold text-brand">3min</span>
        <span class="mt-3 block text-sm text-ink/50">Pour scaffolder</span>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const stats = [
  { value: '10k+', label: 'Projets générés' },
  { value: '98%',  label: 'Taux de satisfaction' },
  { value: '3min', label: 'Pour scaffolder' },
];

export default function Stats() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">En chiffres</p>
        <h2 className="mb-14 font-display text-3xl font-bold tracking-tight text-ink">
          Des résultats concrets
        </h2>
        <div className="grid grid-cols-3 divide-x divide-ink/[0.08]">
          {stats.map(s => (
            <div key={s.label} className="px-8">
              <span className="block font-display text-5xl font-bold text-brand">{s.value}</span>
              <span className="mt-3 block text-sm text-ink/50">{s.label}</span>
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
    id: 'stats-cartes',
    name: 'Cartes KPI sombres',
    description: '4 cartes sur fond sombre avec icône, grand chiffre et libellé.',
    previewHtml: `
<section class="bg-[#0f0d1a] px-6 py-20">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-12 text-center font-display text-3xl font-bold tracking-tight text-white">L'impact en chiffres</h2>
    <div class="grid grid-cols-4 gap-5">
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 text-center">
        <span class="mb-2 block text-2xl">📈</span>
        <span class="block font-display text-4xl font-bold text-brand">+120%</span>
        <span class="mt-2 block text-xs text-white/40">Croissance annuelle</span>
      </div>
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 text-center">
        <span class="mb-2 block text-2xl">⚡</span>
        <span class="block font-display text-4xl font-bold text-brand">10k+</span>
        <span class="mt-2 block text-xs text-white/40">Projets générés</span>
      </div>
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 text-center">
        <span class="mb-2 block text-2xl">🌍</span>
        <span class="block font-display text-4xl font-bold text-brand">42</span>
        <span class="mt-2 block text-xs text-white/40">Pays représentés</span>
      </div>
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 text-center">
        <span class="mb-2 block text-2xl">⭐</span>
        <span class="block font-display text-4xl font-bold text-brand">4.9</span>
        <span class="mt-2 block text-xs text-white/40">Note moyenne</span>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const stats = [
  { icon: '📈', value: '+120%', label: 'Croissance annuelle' },
  { icon: '⚡',  value: '10k+', label: 'Projets générés' },
  { icon: '🌍', value: '42',   label: 'Pays représentés' },
  { icon: '⭐', value: '4.9',  label: 'Note moyenne' },
];

export default function Stats() {
  return (
    <section className="bg-[#0f0d1a] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-white">
          L'impact en chiffres
        </h2>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 text-center">
              <span className="mb-2 block text-2xl">{s.icon}</span>
              <span className="block font-display text-4xl font-bold text-brand">{s.value}</span>
              <span className="mt-2 block text-xs text-white/40">{s.label}</span>
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
    id: 'stats-courbes',
    name: 'Graphe courbe',
    description: 'Titre + 2 métriques à gauche, courbe SVG animée à droite avec légende.',
    previewHtml: `
<section class="bg-white px-8 py-14">
  <div class="mx-auto max-w-5xl">
    <div class="flex items-start gap-12">
      <div class="w-52 flex-shrink-0">
        <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Croissance</p>
        <h2 class="mb-8 font-display text-2xl font-bold leading-tight tracking-tight text-ink">Votre traction en un coup d'œil</h2>
        <div class="space-y-5">
          <div>
            <span class="block font-display text-4xl font-bold text-brand">+10k</span>
            <span class="mt-0.5 block text-sm text-ink/40">Utilisateurs actifs</span>
          </div>
          <div class="border-t border-ink/[0.07] pt-5">
            <span class="block font-display text-4xl font-bold text-ink">×3.4</span>
            <span class="mt-0.5 block text-sm text-ink/40">Croissance · 6 mois</span>
          </div>
        </div>
      </div>
      <div class="min-w-0 flex-1 rounded-2xl border border-ink/[0.06] bg-[#fafafa] px-5 pb-4 pt-5">
        <svg viewBox="0 0 480 155" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <line x1="0" y1="10" x2="480" y2="10" stroke="#e5e7eb" stroke-width="0.8"/>
          <line x1="0" y1="50" x2="480" y2="50" stroke="#e5e7eb" stroke-width="0.8"/>
          <line x1="0" y1="90" x2="480" y2="90" stroke="#e5e7eb" stroke-width="0.8"/>
          <line x1="0" y1="130" x2="480" y2="130" stroke="#e5e7eb" stroke-width="0.8"/>
          <path d="M0,130 C80,112 140,90 200,74 C270,55 340,30 400,17 L480,10 L480,135 L0,135 Z" style="fill:rgba(91,61,245,0.07)"/>
          <path d="M0,130 C80,112 140,90 200,74 C270,55 340,30 400,17 L480,10" fill="none" class="stroke-brand" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="0"   cy="130" r="3.5" fill="white" class="stroke-brand" stroke-width="2"/>
          <circle cx="200" cy="74"  r="3.5" fill="white" class="stroke-brand" stroke-width="2"/>
          <circle cx="400" cy="17"  r="3.5" fill="white" class="stroke-brand" stroke-width="2"/>
          <circle cx="480" cy="10"  r="4"   class="fill-brand" stroke="white" stroke-width="2"/>
          <path d="M0,138 C80,130 180,118 280,105 C360,95 420,80 480,68" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4" stroke-linecap="round"/>
          <text x="0"   y="150" font-size="8" fill="#9ca3af" font-family="monospace">Jan</text>
          <text x="96"  y="150" font-size="8" fill="#9ca3af" font-family="monospace">Fév</text>
          <text x="192" y="150" font-size="8" fill="#9ca3af" font-family="monospace">Mar</text>
          <text x="288" y="150" font-size="8" fill="#9ca3af" font-family="monospace">Avr</text>
          <text x="384" y="150" font-size="8" fill="#9ca3af" font-family="monospace">Mai</text>
        </svg>
        <div class="mt-2 flex items-center gap-5 text-xs text-ink/35">
          <span class="flex items-center gap-1.5">
            <svg width="16" height="2" class="flex-shrink-0"><line x1="0" y1="1" x2="16" y2="1" class="stroke-brand" stroke-width="2" stroke-linecap="round"/></svg>
            Utilisateurs
          </span>
          <span class="flex items-center gap-1.5">
            <svg width="16" height="2" class="flex-shrink-0"><line x1="0" y1="1" x2="16" y2="1" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" stroke-linecap="round"/></svg>
            Projets
          </span>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Stats() {
  return (
    <section className="bg-white px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start gap-12">
          {/* Left: title + key metrics */}
          <div className="w-52 flex-shrink-0">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Croissance</p>
            <h2 className="mb-8 font-display text-2xl font-bold leading-tight tracking-tight text-ink">
              Votre traction en un coup d'œil
            </h2>
            <div className="space-y-5">
              <div>
                <span className="block font-display text-4xl font-bold text-brand">+10k</span>
                <span className="mt-0.5 block text-sm text-ink/40">Utilisateurs actifs</span>
              </div>
              <div className="border-t border-ink/[0.07] pt-5">
                <span className="block font-display text-4xl font-bold text-ink">×3.4</span>
                <span className="mt-0.5 block text-sm text-ink/40">Croissance · 6 mois</span>
              </div>
            </div>
          </div>
          {/* Right: SVG line chart */}
          <div className="min-w-0 flex-1 rounded-2xl border border-ink/[0.06] bg-[#fafafa] px-5 pb-4 pt-5">
            <svg viewBox="0 0 480 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <line x1="0" y1="10"  x2="480" y2="10"  stroke="#e5e7eb" strokeWidth="0.8"/>
              <line x1="0" y1="50"  x2="480" y2="50"  stroke="#e5e7eb" strokeWidth="0.8"/>
              <line x1="0" y1="90"  x2="480" y2="90"  stroke="#e5e7eb" strokeWidth="0.8"/>
              <line x1="0" y1="130" x2="480" y2="130" stroke="#e5e7eb" strokeWidth="0.8"/>
              <path
                d="M0,130 C80,112 140,90 200,74 C270,55 340,30 400,17 L480,10 L480,135 L0,135 Z"
                fill="currentColor" className="text-brand opacity-[0.07]"
              />
              <path
                d="M0,130 C80,112 140,90 200,74 C270,55 340,30 400,17 L480,10"
                fill="none" stroke="currentColor" className="text-brand" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <circle cx="0"   cy="130" r="3.5" fill="white" stroke="currentColor" className="text-brand" strokeWidth="2"/>
              <circle cx="200" cy="74"  r="3.5" fill="white" stroke="currentColor" className="text-brand" strokeWidth="2"/>
              <circle cx="400" cy="17"  r="3.5" fill="white" stroke="currentColor" className="text-brand" strokeWidth="2"/>
              <circle cx="480" cy="10"  r="4"   fill="currentColor" className="text-brand" stroke="white" strokeWidth="2"/>
              <path d="M0,138 C80,130 180,118 280,105 C360,95 420,80 480,68" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" strokeLinecap="round"/>
              <text x="0"   y="150" fontSize="8" fill="#9ca3af" fontFamily="monospace">Jan</text>
              <text x="96"  y="150" fontSize="8" fill="#9ca3af" fontFamily="monospace">Fév</text>
              <text x="192" y="150" fontSize="8" fill="#9ca3af" fontFamily="monospace">Mar</text>
              <text x="288" y="150" fontSize="8" fill="#9ca3af" fontFamily="monospace">Avr</text>
              <text x="384" y="150" fontSize="8" fill="#9ca3af" fontFamily="monospace">Mai</text>
            </svg>
            <div className="mt-2 flex items-center gap-5 text-xs text-ink/35">
              <span className="flex items-center gap-1.5">
                <svg width="16" height="2" className="flex-shrink-0">
                  <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" className="text-brand" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Utilisateurs
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="16" height="2" className="flex-shrink-0">
                  <line x1="0" y1="1" x2="16" y2="1" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,3" strokeLinecap="round"/>
                </svg>
                Projets
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'stats-donut',
    name: 'Anneaux de progression',
    description: '3 donuts SVG avec pourcentage au centre, titre et libellé, fond gris doux.',
    previewHtml: `
<section class="bg-[#eef0f5] px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="mb-12 text-center">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Performance</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Nos métriques clés</h2>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <div class="flex flex-col items-center gap-5">
        <svg width="130" height="130" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e5ef" stroke-width="9"/>
          <circle cx="50" cy="50" r="40" fill="none" class="stroke-brand" stroke-width="9"
            stroke-dasharray="214 37" stroke-linecap="round"
            transform="rotate(-90 50 50)"/>
          <text x="50" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#14121f" font-family="'Space Grotesk',system-ui,sans-serif">85%</text>
          <text x="50" y="60" text-anchor="middle" font-size="8" fill="#9ca3af" font-family="monospace">objectif</text>
        </svg>
        <div class="text-center">
          <div class="font-display text-base font-bold text-ink">Satisfaction client</div>
          <div class="mt-0.5 text-xs text-ink/40">1 200 avis collectés</div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-5">
        <svg width="130" height="130" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e5ef" stroke-width="9"/>
          <circle cx="50" cy="50" r="40" fill="none" class="stroke-brand" stroke-width="9"
            stroke-dasharray="171 80" stroke-linecap="round"
            transform="rotate(-90 50 50)"/>
          <text x="50" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#14121f" font-family="'Space Grotesk',system-ui,sans-serif">68%</text>
          <text x="50" y="60" text-anchor="middle" font-size="8" fill="#9ca3af" font-family="monospace">objectif</text>
        </svg>
        <div class="text-center">
          <div class="font-display text-base font-bold text-ink">Taux de rétention</div>
          <div class="mt-0.5 text-xs text-ink/40">Après 3 mois d'utilisation</div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-5">
        <svg width="130" height="130" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e5ef" stroke-width="9"/>
          <circle cx="50" cy="50" r="40" fill="none" class="stroke-brand" stroke-width="9"
            stroke-dasharray="106 145" stroke-linecap="round"
            transform="rotate(-90 50 50)"/>
          <text x="50" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#14121f" font-family="'Space Grotesk',system-ui,sans-serif">42%</text>
          <text x="50" y="60" text-anchor="middle" font-size="8" fill="#9ca3af" font-family="monospace">objectif</text>
        </svg>
        <div class="text-center">
          <div class="font-display text-base font-bold text-ink">Part de marché</div>
          <div class="mt-0.5 text-xs text-ink/40">Segment dev indépendants</div>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const rings = [
  { pct: 85, dash: '214 37', label: 'Satisfaction client',  sub: '1 200 avis collectés' },
  { pct: 68, dash: '171 80', label: 'Taux de rétention',   sub: 'Après 3 mois d’utilisation' },
  { pct: 42, dash: '106 145',label: 'Part de marché',      sub: 'Segment dev indépendants' },
];

export default function Stats() {
  return (
    <section className="bg-[#eef0f5] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Performance</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Nos métriques clés</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {rings.map(r => (
            <div key={r.label} className="flex flex-col items-center gap-5">
              <svg width="130" height="130" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e5ef" strokeWidth="9" />
                <circle
                  cx="50" cy="50" r="40" fill="none"
                  stroke="currentColor" className="text-brand"
                  strokeWidth="9"
                  strokeDasharray={r.dash}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                <text x="50" y="45" textAnchor="middle" fontSize="16" fontWeight="700" fill="#14121f" fontFamily="'Space Grotesk',system-ui,sans-serif">
                  {r.pct}%
                </text>
                <text x="50" y="60" textAnchor="middle" fontSize="8" fill="#9ca3af" fontFamily="monospace">objectif</text>
              </svg>
              <div className="text-center">
                <div className="font-display text-base font-bold text-ink">{r.label}</div>
                <div className="mt-0.5 text-xs text-ink/40">{r.sub}</div>
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
    id: 'stats-vague',
    name: 'Chiffres & Image (vague)',
    description: 'Fond lavande, grille 2×2 de métriques à gauche, visuel à droite, séparateur en vague.',
    previewHtml: `
<section class="relative overflow-hidden bg-[#ede9ff] px-8 pb-28 pt-16">
  <div class="mx-auto flex max-w-5xl items-center gap-14">
    <div class="flex-1 min-w-0">
      <p class="mb-3 font-mono text-xs uppercase tracking-widest text-brand">En chiffres</p>
      <h2 class="mb-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink">Des résultats<br/>qui parlent<br/>d'eux-mêmes.</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="rounded-2xl bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm">
          <span class="block font-display text-3xl font-bold text-brand">10k+</span>
          <span class="mt-1 block text-sm text-ink/50">Projets générés</span>
        </div>
        <div class="rounded-2xl bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm">
          <span class="block font-display text-3xl font-bold text-brand">98%</span>
          <span class="mt-1 block text-sm text-ink/50">Satisfaction</span>
        </div>
        <div class="rounded-2xl bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm">
          <span class="block font-display text-3xl font-bold text-brand">3min</span>
          <span class="mt-1 block text-sm text-ink/50">Pour scaffolder</span>
        </div>
        <div class="rounded-2xl bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm">
          <span class="block font-display text-3xl font-bold text-brand">42</span>
          <span class="mt-1 block text-sm text-ink/50">Pays</span>
        </div>
      </div>
    </div>
    <div class="relative hidden flex-shrink-0 sm:block" style="width:380px">
      <div style="width:100%;aspect-ratio:4/3;background:#f1f0f4;border:2px dashed #ccc9d6;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b8b3c4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span style="font-size:12px;color:#b8b3c4;font-family:monospace;letter-spacing:0.05em">Photo / Illustration</span>
      </div>
      <div class="absolute -inset-6 -z-10 rounded-full bg-brand/20 blur-3xl"></div>
    </div>
  </div>
  <div class="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="display:block;width:100%;height:80px">
      <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" fill="white"/>
    </svg>
  </div>
</section>`.trim(),
    tsx: `const stats = [
  { value: '10k+', label: 'Projets générés' },
  { value: '98%',  label: 'Satisfaction' },
  { value: '3min', label: 'Pour scaffolder' },
  { value: '42',   label: 'Pays' },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#ede9ff] px-8 pb-28 pt-16">
      <div className="mx-auto flex max-w-5xl items-center gap-14">
        {/* Left: title + 2×2 metric grid */}
        <div className="flex-1 min-w-0">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">En chiffres</p>
          <h2 className="mb-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink">
            Des résultats<br />qui parlent<br />d'eux-mêmes.
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.label} className="rounded-2xl bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm">
                <span className="block font-display text-3xl font-bold text-brand">{s.value}</span>
                <span className="mt-1 block text-sm text-ink/50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: image placeholder */}
        <div className="relative hidden flex-shrink-0 sm:block" style={{ width: '380px' }}>
          <div style={{ width: '100%', aspectRatio: '4/3', background: '#f1f0f4', border: '2px dashed #ccc9d6', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b8b3c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ fontSize: '12px', color: '#b8b3c4', fontFamily: 'monospace', letterSpacing: '0.05em' }}>Photo / Illustration</span>
          </div>
          <div className="absolute -inset-6 -z-10 rounded-full bg-brand/20 blur-3xl" />
        </div>
      </div>
      {/* Wave SVG separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
`,
  },
];
