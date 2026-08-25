import { BrickVariant } from '../../../models/brick-variant.model';

export const VIDEO_VARIANTS: BrickVariant[] = [
  {
    id: 'video-lightbox',
    name: 'Lecteur centré',
    description: 'Grand player centré avec bouton play, fausse barre de progression et caption — fond blanc épuré.',
    previewHtml: `
<section class="bg-white px-8 py-14">
  <div class="mx-auto max-w-4xl">
    <div class="mb-10 text-center">
      <p class="mb-3 font-mono text-xs uppercase tracking-widest text-brand">Démo produit</p>
      <h2 class="mb-3 font-display text-3xl font-bold tracking-tight text-ink">Voyez le produit en action</h2>
      <p class="text-base text-ink/45">En moins de 3 minutes, voyez comment le service fonctionne de bout en bout.</p>
    </div>
    <div class="relative overflow-hidden rounded-2xl shadow-2xl" style="aspect-ratio:16/9;background:linear-gradient(135deg,#1e1030 0%,#3d2b6e 100%)">
      <div class="absolute inset-0 opacity-25">
        <div style="position:absolute;left:0;top:0;width:200px;height:100%;background:rgba(0,0,0,0.35)">
          <div style="height:44px;border-bottom:1px solid rgba(255,255,255,0.06);padding:12px 16px">
            <div style="width:80px;height:16px;background:rgba(255,255,255,0.15);border-radius:4px"></div>
          </div>
          <div style="padding:12px">
            <div style="width:140px;height:8px;background:rgba(255,255,255,0.1);border-radius:3px;margin-bottom:8px"></div>
            <div style="width:120px;height:8px;background:rgba(91,61,245,0.5);border-radius:3px;margin-bottom:8px"></div>
            <div style="width:130px;height:8px;background:rgba(255,255,255,0.07);border-radius:3px;margin-bottom:8px"></div>
            <div style="width:110px;height:8px;background:rgba(255,255,255,0.07);border-radius:3px"></div>
          </div>
        </div>
        <div style="position:absolute;left:200px;right:0;top:44px;bottom:0;padding:20px">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:16px">
            <div style="height:80px;background:rgba(91,61,245,0.2);border-radius:8px;border:1px solid rgba(91,61,245,0.25)"></div>
            <div style="height:80px;background:rgba(255,255,255,0.06);border-radius:8px"></div>
            <div style="height:80px;background:rgba(255,255,255,0.06);border-radius:8px"></div>
          </div>
          <div style="height:120px;background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.06)"></div>
        </div>
      </div>
      <div class="absolute inset-0" style="background:radial-gradient(ellipse at center,rgba(0,0,0,0.05) 0%,rgba(15,13,26,0.35) 100%)"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <button type="button" style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.94);display:flex;align-items:center;justify-content:center;box-shadow:0 12px 48px rgba(0,0,0,0.35);border:0;cursor:pointer">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M9 6.5L21 13 9 19.5V6.5Z" fill="#14121f"/>
          </svg>
        </button>
      </div>
      <div style="position:absolute;bottom:14px;right:14px;background:rgba(0,0,0,0.72);color:white;font-family:monospace;font-size:11px;padding:3px 8px;border-radius:5px;letter-spacing:0.04em">2:47</div>
      <div style="position:absolute;bottom:0;left:0;right:0">
        <div style="height:3px;background:rgba(255,255,255,0.1)">
          <div style="width:28%;height:100%;background:rgba(91,61,245,0.85)"></div>
        </div>
      </div>
    </div>
    <p class="mt-5 text-center font-mono text-xs text-ink/30">Aucun compte requis · 2 min 47 · Sous-titres disponibles</p>
  </div>
</section>`.trim(),
    tsx: `export default function Video() {
  return (
    <section className="bg-white px-8 py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">Démo produit</p>
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-ink">
            Voyez le produit en action
          </h2>
          <p className="text-base text-ink/45">
            En moins de 3 minutes, voyez comment le service fonctionne de bout en bout.
          </p>
        </div>
        {/* Video thumbnail — replace src with your actual video embed or <video> */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg,#1e1030,#3d2b6e)' }}>
          {/* Replace content below with: <iframe src="https://youtube.com/embed/..." allow="autoplay" /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className="flex h-20 w-20 items-center justify-center rounded-full border-0 bg-white/[0.94] shadow-[0_12px_48px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
              aria-label="Lancer la vidéo"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M9 6.5L21 13 9 19.5V6.5Z" fill="#14121f"/>
              </svg>
            </button>
          </div>
          <div className="absolute bottom-3 right-3 rounded bg-black/[0.72] px-2 py-0.5 font-mono text-[11px] tracking-[0.04em] text-white">
            2:47
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-[3px] bg-white/10">
              <div className="h-full w-[28%] bg-brand/85" />
            </div>
          </div>
        </div>
        <p className="mt-5 text-center font-mono text-xs text-ink/30">
          Aucun compte requis · 2 min 47 · Sous-titres disponibles
        </p>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'video-split',
    name: 'Vidéo + texte',
    description: 'Player à gauche, accroche + points clés + CTA à droite — layout asymétrique efficace.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="flex items-center gap-12">
      <div class="relative flex-1 overflow-hidden rounded-2xl shadow-xl" style="aspect-ratio:16/10;background:linear-gradient(135deg,#1e1030,#3d2b6e);min-width:0">
        <div class="absolute inset-0 opacity-20">
          <div style="position:absolute;inset:0;display:grid;grid-template-columns:1fr 2fr;gap:0">
            <div style="background:rgba(0,0,0,0.3);padding:12px">
              <div style="height:8px;background:rgba(255,255,255,0.15);border-radius:3px;margin-bottom:6px;width:80%"></div>
              <div style="height:8px;background:rgba(91,61,245,0.5);border-radius:3px;margin-bottom:6px"></div>
              <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:3px;margin-bottom:6px;width:90%"></div>
              <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:3px;width:70%"></div>
            </div>
            <div style="padding:12px">
              <div style="height:60px;background:rgba(91,61,245,0.15);border-radius:6px;margin-bottom:8px;border:1px solid rgba(91,61,245,0.2)"></div>
              <div style="height:40px;background:rgba(255,255,255,0.05);border-radius:6px"></div>
            </div>
          </div>
        </div>
        <div class="absolute inset-0" style="background:rgba(15,13,26,0.2)"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <button type="button" style="width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.92);display:flex;align-items:center;justify-content:center;border:0;cursor:pointer;box-shadow:0 8px 32px rgba(0,0,0,0.3)">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M7.5 5.5L17.5 11 7.5 16.5V5.5Z" fill="#14121f"/></svg>
          </button>
        </div>
        <div style="position:absolute;bottom:0;left:0;right:0;height:2.5px;background:rgba(255,255,255,0.08)">
          <div style="width:35%;height:100%;background:rgba(91,61,245,0.85)"></div>
        </div>
      </div>
      <div class="w-80 flex-shrink-0">
        <p class="mb-3 font-mono text-xs uppercase tracking-widest text-brand">Démo produit</p>
        <h2 class="mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-ink">Le produit expliqué en 3 minutes</h2>
        <ul class="mb-7 space-y-3">
          <li class="flex items-start gap-3 text-sm text-ink/60">
            <span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="currentColor" class="stroke-brand" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            Composez votre interface section par section
          </li>
          <li class="flex items-start gap-3 text-sm text-ink/60">
            <span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="currentColor" class="stroke-brand" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            Générez un projet React + Express prêt à l'emploi
          </li>
          <li class="flex items-start gap-3 text-sm text-ink/60">
            <span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="currentColor" class="stroke-brand" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            Codez librement — le code vous appartient
          </li>
        </ul>
        <button type="button" class="flex items-center gap-2.5 rounded-full bg-brand px-5 py-2.5 font-body text-sm font-bold text-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3.5L13 8 5 12.5V3.5Z" fill="currentColor"/></svg>
          Voir la démo
        </button>
        <p class="mt-4 font-mono text-xs text-ink/30">2 min 47 · Sans inscription</p>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Video() {
  return (
    <section className="bg-[#eef0f5] px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-12">
          {/* Video player */}
          <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl shadow-xl" style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg,#1e1030,#3d2b6e)' }}>
            {/* Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button type="button" className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-0 bg-white/[0.92] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-transform hover:scale-105" aria-label="Lancer la vidéo">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M7.5 5.5L17.5 11 7.5 16.5V5.5Z" fill="#14121f"/></svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/[0.08]">
              <div className="h-full w-[35%] bg-brand/85" />
            </div>
          </div>
          {/* Text side */}
          <div className="w-80 flex-shrink-0">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">Démo produit</p>
            <h2 className="mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-ink">
              Le produit expliqué en 3 minutes
            </h2>
            <ul className="mb-7 space-y-3">
              {['Composez votre interface section par section', 'Générez un projet prêt à l’emploi', 'Codez librement — le code vous appartient'].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/60">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="currentColor" className="stroke-brand" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button type="button" className="flex items-center gap-2.5 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3.5L13 8 5 12.5V3.5Z" fill="currentColor"/></svg>
              Voir la démo
            </button>
            <p className="mt-4 font-mono text-xs text-ink/30">2 min 47 · Sans inscription</p>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
];
