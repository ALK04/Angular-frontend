import { BrickVariant } from '../../../models/brick-variant.model';

export const PROCESS_VARIANTS: BrickVariant[] = [
  {
    id: 'process-colonnes',
    name: 'Étapes en colonnes',
    description: '3 colonnes numérotées reliées par une flèche — numéro en accent, titre et description.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="mb-14 text-center">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Comment ça marche</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">De zéro à un projet en 3 étapes</h2>
    </div>
    <div class="relative grid grid-cols-3 gap-8">
      <div class="absolute left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] top-[28px] flex items-center" aria-hidden="true">
        <div class="h-px flex-1 bg-ink/[0.1]"></div>
        <svg class="mx-3 flex-shrink-0 text-ink/[0.15]" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 2l5 4-5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <div class="h-px flex-1 bg-ink/[0.1]"></div>
        <svg class="mx-3 flex-shrink-0 text-ink/[0.15]" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 2l5 4-5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <div class="h-px flex-1 bg-ink/[0.1]"></div>
      </div>
      <div class="flex flex-col items-center text-center">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand shadow-lg shadow-brand/30">
          <span class="font-mono text-lg font-bold text-white">01</span>
        </div>
        <h3 class="mb-2 font-display text-base font-bold text-ink">Composez</h3>
        <p class="text-sm leading-relaxed text-ink/50">Sélectionnez vos sections, votre palette de couleurs et vos composants d'interface dans le compositeur visuel.</p>
      </div>
      <div class="flex flex-col items-center text-center">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink/10 bg-white shadow-sm">
          <span class="font-mono text-lg font-bold text-ink/35">02</span>
        </div>
        <h3 class="mb-2 font-display text-base font-bold text-ink">Générez</h3>
        <p class="text-sm leading-relaxed text-ink/50">En un clic, téléchargez un projet React + Express structuré, avec Tailwind, vos choix appliqués et un README.</p>
      </div>
      <div class="flex flex-col items-center text-center">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink/10 bg-white shadow-sm">
          <span class="font-mono text-lg font-bold text-ink/35">03</span>
        </div>
        <h3 class="mb-2 font-display text-base font-bold text-ink">Codez</h3>
        <p class="text-sm leading-relaxed text-ink/50">Faites <code class="rounded bg-ink/[0.06] px-1 py-0.5 font-mono text-xs">npm install && npm run dev</code> et continuez à coder librement. Le projet est entièrement à vous.</p>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const steps = [
  {
    n:     '01',
    title: 'Composez',
    desc:  'Sélectionnez vos sections, votre palette de couleurs et vos composants d’interface dans le compositeur visuel.',
    accent: true,
  },
  {
    n:     '02',
    title: 'Générez',
    desc:  'En un clic, téléchargez un projet React + Express structuré, avec Tailwind, vos choix appliqués et un README.',
    accent: false,
  },
  {
    n:     '03',
    title: 'Codez',
    desc:  'Faites npm install && npm run dev et continuez librement. Le projet est entièrement à vous.',
    accent: false,
  },
];

export default function Process() {
  return (
    <section className="bg-[#eef0f5] px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Comment ça marche</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">De zéro à un projet en 3 étapes</h2>
        </div>
        <div className="relative grid grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center">
              <div className={\`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl \${s.accent ? 'bg-brand shadow-lg shadow-brand/30' : 'border-2 border-ink/10 bg-white shadow-sm'}\`}>
                <span className={\`font-mono text-lg font-bold \${s.accent ? 'text-white' : 'text-ink/35'}\`}>{s.n}</span>
              </div>
              <h3 className="mb-2 font-display text-base font-bold text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink/50">{s.desc}</p>
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
    id: 'process-timeline',
    name: 'Frise chronologique',
    description: '4 jalons sur une ligne horizontale avec point connecteur, titre et description sous chaque nœud.',
    previewHtml: `
<section class="bg-white px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="mb-16 text-center">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Onboarding</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Opérationnel en 4 étapes</h2>
    </div>
    <div class="relative">
      <div class="absolute left-0 right-0 top-[22px] h-px bg-ink/[0.08]" aria-hidden="true"></div>
      <div class="grid grid-cols-4 gap-6">
        <div class="flex flex-col items-center">
          <div class="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand shadow-md shadow-brand/30 ring-4 ring-[#eef0f5]">
            <span class="font-mono text-xs font-bold text-white">01</span>
          </div>
          <div class="text-center">
            <h3 class="mb-1.5 font-display text-sm font-bold text-ink">Créez votre compte</h3>
            <p class="text-xs leading-relaxed text-ink/45">Inscription en 30 secondes, aucune carte bancaire requise pour commencer.</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/[0.1] bg-white ring-4 ring-white">
            <span class="font-mono text-xs font-bold text-ink/30">02</span>
          </div>
          <div class="text-center">
            <h3 class="mb-1.5 font-display text-sm font-bold text-ink">Définissez votre projet</h3>
            <p class="text-xs leading-relaxed text-ink/45">Choisissez votre stack, vos sections et votre identité visuelle en quelques clics.</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/[0.1] bg-white ring-4 ring-white">
            <span class="font-mono text-xs font-bold text-ink/30">03</span>
          </div>
          <div class="text-center">
            <h3 class="mb-1.5 font-display text-sm font-bold text-ink">Générez & téléchargez</h3>
            <p class="text-xs leading-relaxed text-ink/45">Obtenez un projet structuré, documenté et prêt à lancer en local avec npm.</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/[0.1] bg-white ring-4 ring-white">
            <span class="font-mono text-xs font-bold text-ink/30">04</span>
          </div>
          <div class="text-center">
            <h3 class="mb-1.5 font-display text-sm font-bold text-ink">Livrez & itérez</h3>
            <p class="text-xs leading-relaxed text-ink/45">Déployez, partagez avec votre client et continuez à faire évoluer le code librement.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 text-center">
      <button type="button" class="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-body text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:shadow-brand/40">
        Commencer maintenant →
      </button>
    </div>
  </div>
</section>`.trim(),
    tsx: `const steps = [
  { n: '01', title: 'Créez votre compte',      desc: 'Inscription en 30 secondes, aucune carte bancaire requise pour commencer.',              accent: true },
  { n: '02', title: 'Définissez votre projet', desc: 'Choisissez votre stack, vos sections et votre identité visuelle en quelques clics.',    accent: false },
  { n: '03', title: 'Générez & téléchargez',   desc: 'Obtenez un projet structuré, documenté et prêt à lancer en local avec npm.',           accent: false },
  { n: '04', title: 'Livrez & itérez',          desc: 'Déployez, partagez avec votre client et continuez à faire évoluer le code librement.', accent: false },
];

export default function Process() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Onboarding</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Opérationnel en 4 étapes</h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-[22px] h-px bg-ink/[0.08]" aria-hidden="true" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.n} className="flex flex-col items-center">
                <div className={\`relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full \${s.accent ? 'bg-brand shadow-md shadow-brand/30 ring-4 ring-[#eef0f5]' : 'border-2 border-ink/[0.1] bg-white ring-4 ring-white'}\`}>
                  <span className={\`font-mono text-xs font-bold \${s.accent ? 'text-white' : 'text-ink/30'}\`}>{s.n}</span>
                </div>
                <div className="text-center">
                  <h3 className="mb-1.5 font-display text-sm font-bold text-ink">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/45">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5">
            Commencer maintenant →
          </button>
        </div>
      </div>
    </section>
  );
}
`,
  },
];
