import { BrickVariant } from '../../../models/brick-variant.model';

export const HERO_VARIANTS: BrickVariant[] = [
  {
    id: 'hero-centre',
    name: 'Centré',
    description: 'Accroche centrale, sous-titre et double CTA. Sobre et efficace.',
    previewHtml: `
<section class="bg-white px-6 py-16">
  <div class="mx-auto max-w-3xl text-center">
    <span class="mb-6 inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand">Nouveau ✦</span>
    <h1 class="mb-5 font-display text-4xl font-bold leading-tight tracking-tight text-ink">
      Construisez votre produit<br/> plus rapidement
    </h1>
    <p class="mx-auto mb-8 max-w-md text-base leading-relaxed text-ink/55">
      Une plateforme tout-en-un pour lancer votre prochain projet web. Design, code et déploiement — sans compromis.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <a href="#" class="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark">
        Commencer gratuitement →
      </a>
      <a href="#" class="text-sm font-medium text-ink/50 transition hover:text-ink">
        Voir une démo ↗
      </a>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Hero() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-6 inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand">
          Nouveau ✦
        </span>
        <h1 className="mb-5 font-display text-4xl font-bold leading-tight tracking-tight text-ink">
          Construisez votre produit<br /> plus rapidement
        </h1>
        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-ink/55">
          Une plateforme tout-en-un pour lancer votre prochain projet web.
          Design, code et déploiement — sans compromis.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
          >
            Commencer gratuitement →
          </a>
          <a href="#" className="text-sm font-medium text-ink/50 transition hover:text-ink">
            Voir une démo ↗
          </a>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'hero-vague',
    name: 'Vague & Image',
    description: 'Fond lavande avec un séparateur en vague SVG, texte à gauche et photo à droite.',
    previewHtml: `
<section class="relative overflow-hidden bg-[#ede9ff] px-8 pb-28 pt-16">
  <div class="mx-auto flex max-w-5xl items-center gap-14">
    <div class="flex-1 min-w-0">
      <span class="mb-5 inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand">
        ✦ Nouveau
      </span>
      <h1 class="mb-4 font-display text-5xl font-bold leading-[1.1] tracking-tight text-ink">
        Lancez votre produit<br/>sans partir de zéro.
      </h1>
      <p class="mb-8 max-w-sm text-base leading-relaxed text-ink/55">
        Composez visuellement vos composants et exportez un projet React&nbsp;/&nbsp;Node propre et prêt à l'emploi.
      </p>
      <div class="flex flex-wrap gap-3">
        <a href="#" class="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark">
          Commencer gratuitement →
        </a>
        <a href="#" class="rounded-full border border-ink/15 px-7 py-3 text-sm font-semibold text-ink/60 transition hover:border-ink/30 hover:text-ink">
          Voir la démo
        </a>
      </div>
    </div>
    <div class="relative hidden flex-shrink-0 sm:block" style="width:400px">
      <div style="width:100%;aspect-ratio:800/540;background:#f1f0f4;border:2px dashed #ccc9d6;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b8b3c4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span style="font-size:12px;color:#b8b3c4;font-family:monospace;letter-spacing:0.05em">800 × 540</span>
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
    tsx: `export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ede9ff] px-8 pb-28 pt-16">
      <div className="mx-auto flex max-w-5xl items-center gap-14">
        <div className="flex-1 min-w-0">
          <span className="mb-5 inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand">
            ✦ Nouveau
          </span>
          <h1 className="mb-4 font-display text-5xl font-bold leading-[1.1] tracking-tight text-ink">
            Lancez votre produit<br />sans partir de zéro.
          </h1>
          <p className="mb-8 max-w-sm text-base leading-relaxed text-ink/55">
            Composez visuellement vos composants et exportez un projet React&nbsp;/&nbsp;Node propre et prêt à l'emploi.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
            >
              Commencer gratuitement →
            </a>
            <a
              href="#"
              className="rounded-full border border-ink/15 px-7 py-3 text-sm font-semibold text-ink/60 transition hover:border-ink/30 hover:text-ink"
            >
              Voir la démo
            </a>
          </div>
        </div>
        <div className="relative hidden flex-shrink-0 sm:block" style={{ width: '400px' }}>
          <div style={{ width: '100%', aspectRatio: '800/540', background: '#f1f0f4', border: '2px dashed #ccc9d6', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b8b3c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ fontSize: '12px', color: '#b8b3c4', fontFamily: 'monospace', letterSpacing: '0.05em' }}>800 × 540</span>
          </div>
          <div
            className="absolute -inset-6 -z-10 rounded-full bg-brand/20 blur-3xl"
          />
        </div>
      </div>
      {/* Vague SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'hero-split',
    name: 'Scindé sombre',
    description: 'Fond sombre, texte à gauche, aperçu UI à droite. Impact fort.',
    previewHtml: `
<section class="bg-[#0e0c1c] px-8 py-20">
  <div class="mx-auto flex max-w-5xl items-center gap-14">
    <div class="flex-1 min-w-0">
      <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
        ✦ v2.0 disponible
      </div>
      <h1 class="mb-4 font-display text-5xl font-bold leading-[1.08] tracking-tight text-white">
        Votre prochain<br/>projet web,<br/><span class="text-brand">en 5 minutes.</span>
      </h1>
      <p class="mb-8 max-w-sm text-sm leading-relaxed text-white/50">
        Composez visuellement, exportez proprement. Un dossier React/Node prêt à personnaliser.
      </p>
      <div class="mb-8 flex flex-wrap items-center gap-3">
        <a href="#" class="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">
          Démarrer gratuitement →
        </a>
        <a href="#" class="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/60 transition hover:border-white/40 hover:text-white">
          Voir la démo
        </a>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex -space-x-2">
          <div class="h-7 w-7 rounded-full bg-violet-400 ring-2 ring-[#0e0c1c]"></div>
          <div class="h-7 w-7 rounded-full bg-rose-400 ring-2 ring-[#0e0c1c]"></div>
          <div class="h-7 w-7 rounded-full bg-amber-400 ring-2 ring-[#0e0c1c]"></div>
          <div class="h-7 w-7 rounded-full bg-sky-400 ring-2 ring-[#0e0c1c]"></div>
        </div>
        <p class="text-xs text-white/40">Rejoint par +2 000 développeurs</p>
      </div>
    </div>
    <div class="relative hidden flex-shrink-0 sm:block" style="width:300px">
      <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div class="mb-3 flex items-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full bg-brand"></span>
          <span class="font-mono text-[10px] text-white/30">calque.dev/composer</span>
        </div>
        <div class="mb-2 flex h-7 items-center gap-2 rounded-lg bg-white/5 px-2.5">
          <span class="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand/60"></span>
          <div class="h-1.5 flex-1 rounded-full bg-white/10"></div>
          <div class="flex h-4 w-12 items-center justify-center rounded border border-brand/30 bg-brand/15">
            <div class="h-1 w-6 rounded bg-brand/50"></div>
          </div>
        </div>
        <div class="mb-2 grid grid-cols-2 gap-1.5">
          <div class="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-xl border-2 border-brand/50 bg-brand/10">
            <div class="h-1.5 w-10 rounded bg-brand/60"></div>
            <div class="h-1 w-7 rounded bg-brand/30"></div>
          </div>
          <div class="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5">
            <div class="h-1.5 w-10 rounded bg-white/15"></div>
            <div class="h-1 w-7 rounded bg-white/10"></div>
          </div>
          <div class="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5">
            <div class="h-1.5 w-10 rounded bg-white/15"></div>
            <div class="h-1 w-7 rounded bg-white/10"></div>
          </div>
          <div class="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5">
            <div class="h-1.5 w-10 rounded bg-white/15"></div>
            <div class="h-1 w-7 rounded bg-white/10"></div>
          </div>
        </div>
        <div class="flex h-8 items-center justify-center rounded-full bg-brand">
          <div class="h-1.5 w-16 rounded-full bg-white/40"></div>
        </div>
      </div>
      <div class="absolute -inset-6 -z-10 rounded-full bg-brand/15 blur-3xl"></div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Hero() {
  return (
    <section className="bg-[#0e0c1c] px-8 py-20">
      <div className="mx-auto flex max-w-5xl items-center gap-14">
        <div className="flex-1 min-w-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            ✦ v2.0 disponible
          </div>
          <h1 className="mb-4 font-display text-5xl font-bold leading-[1.08] tracking-tight text-white">
            Votre prochain<br/>projet web,<br/><span className="text-brand">en 5 minutes.</span>
          </h1>
          <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/50">
            Composez visuellement, exportez proprement. Un dossier React/Node prêt à personnaliser.
          </p>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <a href="#" className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">
              Démarrer gratuitement →
            </a>
            <a href="#" className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/60 transition hover:border-white/40 hover:text-white">
              Voir la démo
            </a>
          </div>
        </div>
        {/* Right side mockup */}
      </div>
    </section>
  );
}
`,
  },

  {
    id: 'hero-editorial',
    name: 'Éditorial / Maison',
    description: 'Fond craie, ligne déco verticale, grand titre serif en capitales et CTA contour. Aperçu produit avec halo. Aura luxe.',
    previewHtml: `
<section class="relative overflow-hidden bg-[#f5f2ec] px-8 py-20">
  <div class="absolute bottom-0 left-7 top-0 hidden w-px bg-ink/15 lg:block"></div>
  <div class="mx-auto flex max-w-5xl items-center gap-14">
    <div class="min-w-0 flex-1">
      <p class="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Récoltant · Maison</p>
      <div class="mb-5 h-px w-9 bg-ink/40"></div>
      <h1 class="font-serif text-6xl font-light uppercase leading-none tracking-[0.08em] text-ink">Flancourt</h1>
      <p class="mt-5 font-mono text-[11px] uppercase tracking-[0.5em] text-ink/45">Chronique</p>
      <p class="mt-6 max-w-sm font-serif text-base font-light italic leading-relaxed text-ink/60">
        Vigneron fils de vignerons.<br>La vigne comme langue maternelle.
      </p>
      <a href="#" class="group mt-10 inline-flex items-center gap-4 border border-ink px-9 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-[#f5f2ec]">
        Découvrir la collection
        <span class="h-px w-5 bg-current transition-all group-hover:w-8"></span>
      </a>
    </div>
    <div class="relative hidden flex-shrink-0 lg:block" style="width:300px">
      <div class="absolute -inset-10 -z-10 rounded-full bg-brand/15 blur-3xl"></div>
      <div style="width:100%;aspect-ratio:300/430;background:#ece8df;border:1px dashed #cfc8ba;border-radius:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b3ac9c" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
        </svg>
        <span style="font-size:11px;color:#b3ac9c;font-family:monospace;letter-spacing:0.08em">Votre visuel</span>
      </div>
    </div>
  </div>
  <span class="absolute bottom-8 right-10 hidden font-mono text-[11px] uppercase tracking-[0.3em] text-ink/40 sm:block">Est. 2024</span>
</section>`.trim(),
    tsx: `export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f2ec] px-8 py-20">
      <div className="absolute bottom-0 left-7 top-0 hidden w-px bg-ink/15 lg:block" />
      <div className="mx-auto flex max-w-5xl items-center gap-14">
        <div className="min-w-0 flex-1">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Récoltant · Maison</p>
          <div className="mb-5 h-px w-9 bg-ink/40" />
          <h1 className="font-serif text-6xl font-light uppercase leading-none tracking-[0.08em] text-ink">Flancourt</h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.5em] text-ink/45">Chronique</p>
          <p className="mt-6 max-w-sm font-serif text-base font-light italic leading-relaxed text-ink/60">
            Vigneron fils de vignerons.<br />La vigne comme langue maternelle.
          </p>
          <a
            href="#"
            className="group mt-10 inline-flex items-center gap-4 border border-ink px-9 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-[#f5f2ec]"
          >
            Découvrir la collection
            <span className="h-px w-5 bg-current transition-all group-hover:w-8" />
          </a>
        </div>
        <div className="relative hidden flex-shrink-0 lg:block" style={{ width: '300px' }}>
          <div className="absolute -inset-10 -z-10 rounded-full bg-brand/15 blur-3xl" />
          {/* Remplacez ce bloc par votre visuel : <img src="..." alt="" className="w-full rounded-[14px] object-cover" /> */}
          <div style={{ width: '100%', aspectRatio: '300 / 430', background: '#ece8df', border: '1px dashed #cfc8ba', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b3ac9c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
            <span style={{ fontSize: '11px', color: '#b3ac9c', fontFamily: 'monospace', letterSpacing: '0.08em' }}>Votre visuel</span>
          </div>
        </div>
      </div>
      <span className="absolute bottom-8 right-10 hidden font-mono text-[11px] uppercase tracking-[0.3em] text-ink/40 sm:block">
        Est. 2024
      </span>
    </section>
  );
}
`,
  },

  {
    id: 'hero-pleine-page',
    name: 'Plein écran / éditorial',
    description: 'Hero immersif : photo plein écran, dégradé de protection en bas, titre serif géant aligné en bas à gauche. Pour pages « À propos » à forte ambiance.',
    previewHtml: `
<section class="relative flex min-h-[560px] flex-col justify-end overflow-hidden bg-[#dcd6ca]">
  <div class="absolute inset-0" style="background:linear-gradient(160deg,#cfc7b6 0%,#b9b0a0 45%,#8f877a 100%)"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <span style="font-family:monospace;font-size:12px;letter-spacing:0.1em;color:rgba(20,16,14,0.28)">Votre photo plein écran</span>
  </div>
  <div class="absolute inset-0" style="background:linear-gradient(to top, rgba(245,242,236,0.94) 0%, rgba(245,242,236,0.3) 45%, transparent 78%)"></div>
  <div class="absolute bottom-0 left-7 top-0 hidden w-px bg-ink/15 lg:block"></div>
  <div class="relative z-10 px-8 pb-16 pt-36 lg:px-16">
    <p class="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/55">Notre Maison · Est. 2024</p>
    <h1 class="font-serif text-6xl font-light leading-[1.05] tracking-[0.04em] text-ink sm:text-7xl">Entre<br>les rangs</h1>
    <p class="mt-8 max-w-sm font-serif text-base font-light leading-relaxed text-ink/65">
      L'histoire d'un fils de vigneron qui bâtit sa propre voix, depuis les racines familiales jusqu'à une adresse qui porte son nom.
    </p>
  </div>
</section>`.trim(),
    tsx: `export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] flex-col justify-end overflow-hidden bg-[#dcd6ca]">
      {/* Remplacez ce dégradé par votre photo : <img src="..." alt="" className="absolute inset-0 h-full w-full object-cover" /> */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,#cfc7b6 0%,#b9b0a0 45%,#8f877a 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(245,242,236,0.94) 0%, rgba(245,242,236,0.3) 45%, transparent 78%)' }} />
      <div className="absolute bottom-0 left-7 top-0 hidden w-px bg-ink/15 lg:block" />
      <div className="relative z-10 px-8 pb-16 pt-36 lg:px-16">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/55">Notre Maison · Est. 2024</p>
        <h1 className="font-serif text-6xl font-light leading-[1.05] tracking-[0.04em] text-ink sm:text-7xl">
          Entre<br />les rangs
        </h1>
        <p className="mt-8 max-w-sm font-serif text-base font-light leading-relaxed text-ink/65">
          L'histoire d'un fils de vigneron qui bâtit sa propre voix, depuis les racines familiales jusqu'à une adresse qui porte son nom.
        </p>
      </div>
    </section>
  );
}
`,
  },
];
