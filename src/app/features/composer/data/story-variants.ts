import { BrickVariant } from '../../../models/brick-variant.model';

export const STORY_VARIANTS: BrickVariant[] = [
  {
    id: 'story-split',
    name: 'Split texte / image',
    description: 'Bloc asymétrique — texte & mission à gauche, visuel pleine hauteur à droite, fond blanc.',
    previewHtml: `
<section class="bg-white px-8 py-20">
  <div class="mx-auto max-w-5xl">
    <div class="flex items-center gap-16">
      <div class="flex-1 min-w-0">
        <p class="mb-3 font-mono text-xs uppercase tracking-widest text-brand">Notre histoire</p>
        <h2 class="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink">
          Construits pour<br>les bâtisseurs<br>du web.
        </h2>
        <p class="mb-4 text-base leading-relaxed text-ink/55">
          Calque est né d'une frustration simple : pourquoi passer des heures à configurer la même stack encore et encore ? En 2024, après avoir répété ce rituel des dizaines de fois, nous avons décidé d'y mettre un terme.
        </p>
        <p class="mb-8 text-base leading-relaxed text-ink/55">
          Aujourd'hui, notre outil permet à des centaines de développeurs de démarrer en quelques minutes — avec un code propre, structuré, et entièrement à eux.
        </p>
        <a class="inline-flex items-center gap-2 font-mono text-sm font-bold text-brand hover:opacity-70 transition-opacity">
          Découvrir l'équipe
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <div class="w-[420px] flex-shrink-0">
        <div class="relative">
          <div style="width:100%;aspect-ratio:4/3;background:linear-gradient(135deg,#ede9ff 0%,#c4b5fd 100%);border-radius:20px;display:flex;align-items:center;justify-content:center;overflow:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(91,61,245,0.35)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <div class="absolute -bottom-4 -right-4 rounded-2xl border border-white bg-white p-4 shadow-lg">
            <p class="font-mono text-xs text-ink/30 mb-1">Depuis</p>
            <p class="font-display text-2xl font-bold text-ink">2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Story() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-16">
          {/* Left: text */}
          <div className="min-w-0 flex-1">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">Notre histoire</p>
            <h2 className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink">
              Construits pour<br />les bâtisseurs<br />du web.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-ink/55">
              Calque est né d'une frustration simple : pourquoi passer des heures à configurer la même stack encore et encore ? En 2024, après avoir répété ce rituel des dizaines de fois, nous avons décidé d'y mettre un terme.
            </p>
            <p className="mb-8 text-base leading-relaxed text-ink/55">
              Aujourd'hui, notre outil permet à des centaines de développeurs de démarrer en quelques minutes — avec un code propre, structuré, et entièrement à eux.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-mono text-sm font-bold text-brand transition-opacity hover:opacity-70">
              Découvrir l'équipe
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          {/* Right: image */}
          <div className="w-[420px] flex-shrink-0">
            <div className="relative">
              <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#ede9ff] to-[#c4b5fd]">
                {/* Replace with your actual image: <img src="..." alt="..." className="h-full w-full object-cover" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(91,61,245,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white bg-white p-4 shadow-lg">
                <p className="mb-1 font-mono text-xs text-ink/30">Depuis</p>
                <p className="font-display text-2xl font-bold text-ink">2024</p>
              </div>
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
    id: 'story-sombre',
    name: 'Éditorial sombre',
    description: 'Fond sombre, image à gauche avec overlay dégradé, texte & citation à droite — impact maximal.',
    previewHtml: `
<section class="bg-[#0f0d1a] px-8 py-20">
  <div class="mx-auto max-w-5xl">
    <div class="flex items-stretch gap-0 overflow-hidden rounded-3xl">
      <div class="relative w-80 flex-shrink-0" style="background:linear-gradient(135deg,#1e1030 0%,#3d2b6e 100%);min-height:400px">
        <div class="absolute inset-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
        <div class="absolute inset-0" style="background:linear-gradient(to right, transparent 60%, rgba(15,13,26,0.6) 100%)"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <p class="font-mono text-xs uppercase tracking-widest text-white/30 mb-1">Fondée en</p>
          <p class="font-display text-4xl font-black text-white/80">2024</p>
        </div>
      </div>
      <div class="flex-1 bg-white/[0.03] p-10 border border-white/[0.06] border-l-0">
        <p class="mb-4 font-mono text-xs uppercase tracking-widest text-brand">À propos</p>
        <h2 class="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-white">
          Un outil construit<br>par des devs,<br>pour des devs.
        </h2>
        <blockquote class="mb-6 border-l-2 border-brand pl-4">
          <p class="text-base italic leading-relaxed text-white/50">"On en avait assez de répéter les mêmes étapes de setup. Calque, c'est l'outil qu'on aurait voulu avoir depuis le début."</p>
          <footer class="mt-3 font-mono text-xs text-white/30">— Marie Jourdain, Co-fondatrice</footer>
        </blockquote>
        <p class="mb-8 text-sm leading-relaxed text-white/40">
          Depuis 2024, nous aidons des développeurs indépendants et des équipes à démarrer plus vite, avec un code propre et une structure claire. Pas de magie noire — juste du scaffolding bien pensé.
        </p>
        <a class="inline-flex items-center gap-2 rounded-full bg-brand/20 px-5 py-2.5 font-mono text-xs font-bold text-brand hover:bg-brand/30 transition-colors">
          Notre manifeste →
        </a>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Story() {
  return (
    <section className="bg-[#0f0d1a] px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-stretch gap-0 overflow-hidden rounded-3xl">
          {/* Left: image side */}
          <div className="relative w-80 flex-shrink-0" style={{ background: 'linear-gradient(135deg,#1e1030 0%,#3d2b6e 100%)', minHeight: '400px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Replace with actual image: <img src="..." className="h-full w-full object-cover" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(15,13,26,0.6) 100%)' }} />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-white/30">Fondée en</p>
              <p className="font-display text-4xl font-black text-white/80">2024</p>
            </div>
          </div>
          {/* Right: text side */}
          <div className="flex-1 border border-l-0 border-white/[0.06] bg-white/[0.03] p-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-brand">À propos</p>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-white">
              Un outil construit<br />par des devs,<br />pour des devs.
            </h2>
            <blockquote className="mb-6 border-l-2 border-brand pl-4">
              <p className="text-base italic leading-relaxed text-white/50">
                "On en avait assez de répéter les mêmes étapes de setup. Calque, c'est l'outil qu'on aurait voulu avoir depuis le début."
              </p>
              <footer className="mt-3 font-mono text-xs text-white/30">— Marie Jourdain, Co-fondatrice</footer>
            </blockquote>
            <p className="mb-8 text-sm leading-relaxed text-white/40">
              Depuis 2024, nous aidons des développeurs indépendants et des équipes à démarrer plus vite, avec un code propre et une structure claire.
            </p>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-5 py-2.5 font-mono text-xs font-bold text-brand transition-colors hover:bg-brand/30">
              Notre manifeste →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'story-heritage',
    name: 'Frise / Héritage',
    description: 'Chronologie sur carte givrée — années en mono, puces sur fil vertical, texte serif. Idéale pour raconter l’histoire d’une maison.',
    previewHtml: `
<section class="bg-[#f5f2ec] px-8 py-20">
  <div class="mx-auto max-w-3xl">
    <div class="border border-ink/10 bg-white/60 px-8 py-14 backdrop-blur sm:px-14">
      <p class="mb-14 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">L'héritage</p>
      <div class="relative">
        <div class="absolute hidden w-px bg-ink/15 sm:block" style="left:5.5rem;top:0.4rem;bottom:0.4rem"></div>
        <ol class="flex flex-col gap-12">
          <li class="flex items-start gap-6 sm:gap-10">
            <div class="w-14 shrink-0 pt-0.5 text-right sm:w-[5.5rem]"><span class="font-mono text-[11px] tracking-wide text-brand">1952</span></div>
            <div class="relative z-10 mt-1.5 hidden shrink-0 sm:block"><span class="block h-[7px] w-[7px] rounded-full border border-brand bg-[#f5f2ec]" style="margin-left:-3.5px"></span></div>
            <p class="max-w-md font-serif text-[15px] font-light leading-relaxed text-ink/65">Les premières bouteilles voient le jour dans la vallée. Le début d'une lignée.</p>
          </li>
          <li class="flex items-start gap-6 sm:gap-10">
            <div class="w-14 shrink-0 pt-0.5 text-right sm:w-[5.5rem]"><span class="font-mono text-[11px] tracking-wide text-brand">2009</span></div>
            <div class="relative z-10 mt-1.5 hidden shrink-0 sm:block"><span class="block h-[7px] w-[7px] rounded-full border border-brand bg-[#f5f2ec]" style="margin-left:-3.5px"></span></div>
            <p class="max-w-md font-serif text-[15px] font-light leading-relaxed text-ink/65">Fondation du domaine. Trois terroirs, une même exigence : argile, silex et craie.</p>
          </li>
          <li class="flex items-start gap-6 sm:gap-10">
            <div class="w-14 shrink-0 pt-0.5 text-right sm:w-[5.5rem]"><span class="font-mono text-[11px] tracking-wide text-brand">2019</span></div>
            <div class="relative z-10 mt-1.5 hidden shrink-0 sm:block"><span class="block h-[7px] w-[7px] rounded-full border border-brand bg-[#f5f2ec]" style="margin-left:-3.5px"></span></div>
            <p class="max-w-md font-serif text-[15px] font-light leading-relaxed text-ink/65">La nouvelle génération rejoint la maison. Apprendre à lire la vigne avant tout.</p>
          </li>
          <li class="flex items-start gap-6 sm:gap-10">
            <div class="w-14 shrink-0 pt-0.5 text-right sm:w-[5.5rem]"><span class="font-mono text-[11px] tracking-wide text-brand">2024</span></div>
            <div class="relative z-10 mt-1.5 hidden shrink-0 sm:block"><span class="block h-[7px] w-[7px] rounded-full border border-brand bg-[#f5f2ec]" style="margin-left:-3.5px"></span></div>
            <p class="max-w-md font-serif text-[15px] font-light leading-relaxed text-ink/65">Naissance de la Maison. Des raisins choisis, un assemblage personnel, une adresse.</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const milestones = [
  { year: '1952', text: 'Les premières bouteilles voient le jour dans la vallée. Le début d\’une lignée.' },
  { year: '2009', text: 'Fondation du domaine. Trois terroirs, une même exigence : argile, silex et craie.' },
  { year: '2019', text: 'La nouvelle génération rejoint la maison. Apprendre à lire la vigne avant tout.' },
  { year: '2024', text: 'Naissance de la Maison. Des raisins choisis, un assemblage personnel, une adresse.' },
];

export default function Story() {
  return (
    <section className="bg-[#f5f2ec] px-8 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="border border-ink/10 bg-white/60 px-8 py-14 backdrop-blur sm:px-14">
          <p className="mb-14 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">L'héritage</p>
          <div className="relative">
            <div className="absolute hidden w-px bg-ink/15 sm:block" style={{ left: '5.5rem', top: '0.4rem', bottom: '0.4rem' }} />
            <ol className="flex flex-col gap-12">
              {milestones.map((m) => (
                <li key={m.year} className="flex items-start gap-6 sm:gap-10">
                  <div className="w-14 shrink-0 pt-0.5 text-right sm:w-[5.5rem]">
                    <span className="font-mono text-[11px] tracking-wide text-brand">{m.year}</span>
                  </div>
                  <div className="relative z-10 mt-1.5 hidden shrink-0 sm:block">
                    <span className="block h-[7px] w-[7px] rounded-full border border-brand bg-[#f5f2ec]" style={{ marginLeft: '-3.5px' }} />
                  </div>
                  <p className="max-w-md font-serif text-[15px] font-light leading-relaxed text-ink/65">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'story-cense',
    name: 'Texte & image / Maison',
    description: 'Carte givrée texte à gauche (label, titre serif, récit, adresse en mono) et visuel à droite. Récit de marque luxe sur fond craie.',
    previewHtml: `
<section class="bg-[#f5f2ec] px-8 py-20">
  <div class="mx-auto max-w-5xl">
    <div class="grid items-stretch gap-6 lg:grid-cols-2">
      <div class="flex flex-col justify-center border border-ink/10 bg-white/60 p-10 backdrop-blur lg:p-14">
        <p class="mb-7 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Le nom</p>
        <h2 class="mb-7 font-serif text-4xl font-light leading-tight tracking-[0.06em] text-ink">La Cense<br>Flancourt</h2>
        <div class="mb-9 h-px w-7 bg-brand"></div>
        <div class="space-y-5 font-serif text-[15px] font-light leading-relaxed text-ink/65">
          <p>Le champagne porte le nom de l'adresse où il naît. C'est là que le vin repose sur lattes, patiemment.</p>
          <p>Pas de château, pas de maison historique. Une adresse, et ce qu'il y a dedans. Quelque chose d'honnête.</p>
        </div>
        <div class="mt-10 border-t border-ink/10 pt-8">
          <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">13 rue de la Cense Flancourt</p>
        </div>
      </div>
      <div class="relative min-h-[320px] overflow-hidden" style="background:rgba(200,197,191,0.45)">
        <div class="absolute inset-0 flex items-end p-6">
          <span class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">Votre photo — 1200 × 800</span>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Story() {
  return (
    <section className="bg-[#f5f2ec] px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center border border-ink/10 bg-white/60 p-10 backdrop-blur lg:p-14">
            <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Le nom</p>
            <h2 className="mb-7 font-serif text-4xl font-light leading-tight tracking-[0.06em] text-ink">
              La Cense<br />Flancourt
            </h2>
            <div className="mb-9 h-px w-7 bg-brand" />
            <div className="space-y-5 font-serif text-[15px] font-light leading-relaxed text-ink/65">
              <p>Le champagne porte le nom de l'adresse où il naît. C'est là que le vin repose sur lattes, patiemment.</p>
              <p>Pas de château, pas de maison historique. Une adresse, et ce qu'il y a dedans. Quelque chose d'honnête.</p>
            </div>
            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">13 rue de la Cense Flancourt</p>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden bg-[#c8c5bf]/70">
            {/* Remplacez par votre photo : <img src="..." alt="" className="absolute inset-0 h-full w-full object-cover" /> */}
            <div className="absolute inset-0 flex items-end p-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">Votre photo — 1200 × 800</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
];
