import { BrickVariant } from '../../../models/brick-variant.model';

export const FAQ_VARIANTS: BrickVariant[] = [
  {
    id: 'faq-accordeon',
    name: 'Accordéon classique',
    description: 'Questions en liste avec le premier item ouvert, fond blanc centré.',
    previewHtml: `
<section class="bg-white px-8 py-12">
  <div class="mx-auto max-w-2xl">
    <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">FAQ</p>
    <h2 class="mb-10 font-display text-3xl font-bold tracking-tight text-ink">Questions fréquentes</h2>
    <div class="divide-y divide-ink/[0.07]">
      <div class="py-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-semibold text-brand">Qu'est-ce que Calque exactement ?</h3>
          <span class="mt-0.5 flex-shrink-0 text-lg leading-none text-brand">−</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-ink/55">Calque est un générateur de projets React + Node.js. Vous choisissez visuellement vos sections, palette de couleurs et composants, et Calque vous remet un dossier de projet structuré, prêt à coder.</p>
      </div>
      <div class="py-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-medium text-ink">Comment récupérer mon projet généré ?</h3>
          <span class="mt-0.5 flex-shrink-0 text-xl font-light leading-none text-ink/30">+</span>
        </div>
      </div>
      <div class="py-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-medium text-ink">Dois-je payer pour utiliser Calque ?</h3>
          <span class="mt-0.5 flex-shrink-0 text-xl font-light leading-none text-ink/30">+</span>
        </div>
      </div>
      <div class="py-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-medium text-ink">Le code généré peut-il être personnalisé librement ?</h3>
          <span class="mt-0.5 flex-shrink-0 text-xl font-light leading-none text-ink/30">+</span>
        </div>
      </div>
      <div class="py-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-medium text-ink">Quelles technologies sont incluses dans le projet ?</h3>
          <span class="mt-0.5 flex-shrink-0 text-xl font-light leading-none text-ink/30">+</span>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const faqs = [
  {
    q: 'Qu’est-ce que Calque exactement ?',
    a: 'Calque est un générateur de projets React + Node.js. Vous choisissez visuellement vos sections, palette de couleurs et composants, et Calque vous remet un dossier de projet structuré, prêt à coder.',
    open: true,
  },
  { q: 'Comment récupérer mon projet généré ?' },
  { q: 'Dois-je payer pour utiliser Calque ?' },
  { q: 'Le code généré peut-il être personnalisé librement ?' },
  { q: 'Quelles technologies sont incluses dans le projet ?' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-white px-8 py-12">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">FAQ</p>
        <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-ink">Questions fréquentes</h2>
        <div className="divide-y divide-ink/[0.07]">
          {faqs.map((item, i) => (
            <div key={i} className="py-5">
              <button
                className="flex w-full items-start justify-between gap-4 text-left"
                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
              >
                <h3 className={\`font-\${i === openIndex ? 'semibold text-brand' : 'medium text-ink'}\`}>{item.q}</h3>
                <span className={\`mt-0.5 flex-shrink-0 leading-none \${i === openIndex ? 'text-lg text-brand' : 'text-xl font-light text-ink/30'}\`}>
                  {i === openIndex ? '−' : '+'}
                </span>
              </button>
              {i === openIndex && item.a && (
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{item.a}</p>
              )}
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
    id: 'faq-grille',
    name: 'Grille de cartes',
    description: 'Q&R en grille 2 colonnes sur fond gris, chaque question dans une carte blanche.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-14">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10 text-center">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">FAQ</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Questions fréquentes</h2>
      <p class="mx-auto mt-3 max-w-md text-sm text-ink/45">Tout ce que vous voulez savoir avant de démarrer.</p>
    </div>
    <div class="grid grid-cols-2 gap-5">
      <div class="rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-3 flex items-center gap-2">
          <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">?</span>
          <h3 class="font-semibold text-ink">Qu'est-ce que Calque exactement ?</h3>
        </div>
        <p class="text-sm leading-relaxed text-ink/50">Un générateur de projets React + Node.js. Composez visuellement, récupérez le code.</p>
      </div>
      <div class="rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-3 flex items-center gap-2">
          <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">?</span>
          <h3 class="font-semibold text-ink">Comment récupérer mon projet généré ?</h3>
        </div>
        <p class="text-sm leading-relaxed text-ink/50">À l'étape finale, Calque génère une archive ZIP. Décompressez, faites <code class="rounded bg-ink/[0.06] px-1 font-mono text-xs">npm install</code> et c'est prêt.</p>
      </div>
      <div class="rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-3 flex items-center gap-2">
          <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">?</span>
          <h3 class="font-semibold text-ink">Dois-je payer pour utiliser Calque ?</h3>
        </div>
        <p class="text-sm leading-relaxed text-ink/50">La génération de base est gratuite. Des fonctionnalités avancées (thèmes premium, export CI/CD) seront disponibles en formule Pro.</p>
      </div>
      <div class="rounded-2xl bg-white p-6 shadow-sm">
        <div class="mb-3 flex items-center gap-2">
          <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">?</span>
          <h3 class="font-semibold text-ink">Le code peut-il être personnalisé après ?</h3>
        </div>
        <p class="text-sm leading-relaxed text-ink/50">Absolument. Le code vous appartient entièrement — pas de lock-in, pas de dépendance à Calque dans le projet généré.</p>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const faqs = [
  {
    q: 'Qu’est-ce que Calque exactement ?',
    a: 'Un générateur de projets React + Node.js. Composez visuellement, récupérez le code.',
  },
  {
    q: 'Comment récupérer mon projet généré ?',
    a: 'À l’étape finale, Calque génère une archive ZIP. Décompressez, faites npm install et c’est prêt.',
  },
  {
    q: 'Dois-je payer pour utiliser Calque ?',
    a: 'La génération de base est gratuite. Des fonctionnalités avancées seront disponibles en formule Pro.',
  },
  {
    q: 'Le code peut-il être personnalisé après ?',
    a: 'Absolument. Le code vous appartient entièrement — pas de lock-in, pas de dépendance à Calque.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#eef0f5] px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Questions fréquentes</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/45">Tout ce que vous voulez savoir avant de démarrer.</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">?</span>
                <h3 className="font-semibold text-ink">{item.q}</h3>
              </div>
              <p className="text-sm leading-relaxed text-ink/50">{item.a}</p>
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
    id: 'faq-contact',
    name: 'FAQ + Contact',
    description: 'Accordéon sur la gauche, bloc contact invitant à écrire sur la droite.',
    previewHtml: `
<section class="bg-white px-8 py-14">
  <div class="mx-auto max-w-5xl">
    <div class="flex gap-14">
      <div class="flex-1 min-w-0">
        <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">FAQ</p>
        <h2 class="mb-8 font-display text-3xl font-bold tracking-tight text-ink">Questions fréquentes</h2>
        <div class="divide-y divide-ink/[0.07]">
          <div class="py-4">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-sm font-semibold text-brand">Qu'est-ce que Calque exactement ?</h3>
              <span class="mt-0.5 flex-shrink-0 leading-none text-brand">−</span>
            </div>
            <p class="mt-2 text-xs leading-relaxed text-ink/50">Un générateur de projets React + Node.js. Composez visuellement, récupérez le code structuré.</p>
          </div>
          <div class="py-4">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-sm font-medium text-ink">Comment récupérer mon projet généré ?</h3>
              <span class="mt-0.5 flex-shrink-0 text-base font-light leading-none text-ink/30">+</span>
            </div>
          </div>
          <div class="py-4">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-sm font-medium text-ink">Dois-je payer pour utiliser Calque ?</h3>
              <span class="mt-0.5 flex-shrink-0 text-base font-light leading-none text-ink/30">+</span>
            </div>
          </div>
          <div class="py-4">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-sm font-medium text-ink">Le code peut-il être personnalisé librement ?</h3>
              <span class="mt-0.5 flex-shrink-0 text-base font-light leading-none text-ink/30">+</span>
            </div>
          </div>
          <div class="py-4">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-sm font-medium text-ink">Quelles technologies sont incluses ?</h3>
              <span class="mt-0.5 flex-shrink-0 text-base font-light leading-none text-ink/30">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-64 flex-shrink-0">
        <div class="sticky top-8 rounded-2xl border border-ink/[0.08] bg-[#fafafa] p-6">
          <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" class="text-brand" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 13.3c0 .4-.1.7-.2 1-.2.3-.4.6-.7.8-.5.4-1 .6-1.6.6-.4 0-.9-.1-1.4-.4-.5-.2-1-.6-1.5-1L4.7 6.4c-.4-.5-.8-1-1-1.5-.3-.5-.4-1-.4-1.4 0-.6.2-1.1.5-1.6.3-.5.7-.9 1.2-1.1.5-.2.9-.1 1.1.2l2.4 3.3c.1.2.2.3.2.5 0 .2-.1.3-.2.5l-.7.8c-.1.1-.1.2-.1.3s0 .2.1.3l3.5 3.5c.1.1.2.1.3.1s.2 0 .3-.1l.8-.7c.2-.2.4-.2.5-.2.2 0 .3.1.5.2l3.3 2.4c.2.2.2.6.1.9z"/></svg>
          </div>
          <h3 class="mb-2 font-display text-base font-bold text-ink">Vous n'avez pas trouvé votre réponse ?</h3>
          <p class="mb-5 text-xs leading-relaxed text-ink/50">Notre équipe répond en moins de 24 h. N'hésitez pas à nous contacter.</p>
          <a href="mailto:contact@calque.dev" class="block w-full rounded-xl bg-brand py-2.5 text-center text-xs font-bold text-white transition hover:opacity-90">
            Nous contacter →
          </a>
          <a href="#" class="mt-3 block text-center text-xs font-medium text-ink/40 hover:text-ink">
            Voir la documentation
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const faqs = [
  {
    q: 'Qu’est-ce que Calque exactement ?',
    a: 'Un générateur de projets React + Node.js. Composez visuellement, récupérez le code structuré.',
    open: true,
  },
  { q: 'Comment récupérer mon projet généré ?' },
  { q: 'Dois-je payer pour utiliser Calque ?' },
  { q: 'Le code peut-il être personnalisé librement ?' },
  { q: 'Quelles technologies sont incluses ?' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-white px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex gap-14">
          <div className="min-w-0 flex-1">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">FAQ</p>
            <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-ink">Questions fréquentes</h2>
            <div className="divide-y divide-ink/[0.07]">
              {faqs.map((item, i) => (
                <div key={i} className="py-4">
                  <button
                    className="flex w-full items-start justify-between gap-4 text-left"
                    onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                  >
                    <h3 className={\`text-sm \${i === openIndex ? 'font-semibold text-brand' : 'font-medium text-ink'}\`}>{item.q}</h3>
                    <span className={\`mt-0.5 flex-shrink-0 leading-none \${i === openIndex ? 'text-brand' : 'text-base font-light text-ink/30'}\`}>
                      {i === openIndex ? '−' : '+'}
                    </span>
                  </button>
                  {i === openIndex && item.a && (
                    <p className="mt-2 text-xs leading-relaxed text-ink/50">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-8 rounded-2xl border border-ink/[0.08] bg-[#fafafa] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                {/* icon */}
              </div>
              <h3 className="mb-2 font-display text-base font-bold text-ink">Vous n'avez pas trouvé votre réponse ?</h3>
              <p className="mb-5 text-xs leading-relaxed text-ink/50">Notre équipe répond en moins de 24 h. N'hésitez pas à nous contacter.</p>
              <a href="mailto:contact@calque.dev" className="block w-full rounded-xl bg-brand py-2.5 text-center text-xs font-bold text-white transition hover:opacity-90">
                Nous contacter →
              </a>
              <a href="#" className="mt-3 block text-center text-xs font-medium text-ink/40 hover:text-ink">
                Voir la documentation
              </a>
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
