import { BrickVariant } from '../../../models/brick-variant.model';

export const FORMS_VARIANTS: BrickVariant[] = [
  {
    id: 'forms-wizard',
    name: 'Devis étape par étape',
    description: 'Formulaire multi-étapes avec progression visuelle et choix radio stylisés.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-14">
  <div class="mx-auto max-w-lg">
    <div class="mb-8 flex items-center">
      <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">1</div>
      <div class="mx-3 h-1 flex-1 rounded-full bg-brand/50"></div>
      <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white ring-4 ring-brand/20">2</div>
      <div class="mx-3 h-1 flex-1 rounded-full bg-ink/[0.1]"></div>
      <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ink/[0.07] text-xs font-semibold text-ink/35">3</div>
    </div>
    <div class="rounded-2xl bg-white p-8 shadow-sm">
      <p class="mb-1 font-mono text-xs uppercase tracking-widest text-brand">Étape 2 · Budget</p>
      <h2 class="mb-6 font-display text-2xl font-bold text-ink">Quel est votre budget ?</h2>
      <div class="mb-6 space-y-3">
        <div class="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/[0.1] p-4">
          <div class="h-5 w-5 flex-shrink-0 rounded-full border-2 border-ink/20"></div>
          <span class="text-sm font-medium text-ink">Moins de 5 000 €</span>
        </div>
        <div class="flex cursor-pointer items-center gap-3 rounded-xl border border-brand/60 bg-brand/[0.05] p-4">
          <div class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand">
            <div class="h-2.5 w-2.5 rounded-full bg-brand"></div>
          </div>
          <span class="text-sm font-bold text-ink">5 000 – 20 000 €</span>
          <span class="ml-auto rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">Populaire</span>
        </div>
        <div class="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/[0.1] p-4">
          <div class="h-5 w-5 flex-shrink-0 rounded-full border-2 border-ink/20"></div>
          <span class="text-sm font-medium text-ink">Plus de 20 000 €</span>
        </div>
      </div>
      <div class="flex gap-3">
        <button class="rounded-xl border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink/50">← Retour</button>
        <button class="flex-1 rounded-xl bg-brand py-2.5 text-sm font-bold text-white">Continuer →</button>
      </div>
    </div>
    <p class="mt-5 text-center font-mono text-xs text-ink/35">Sans engagement · Réponse sous 24 h</p>
  </div>
</section>`.trim(),
    tsx: `type Step = 'projet' | 'budget' | 'contact';

const STEPS: Step[] = ['projet', 'budget', 'contact'];
const BUDGETS = [
  { id: 'small',  label: 'Moins de 5 000 €' },
  { id: 'medium', label: '5 000 – 20 000 €', popular: true },
  { id: 'large',  label: 'Plus de 20 000 €' },
];

export default function DevisWizard() {
  const [step, setStep] = useState<Step>('budget');
  const [budget, setBudget] = useState('medium');

  return (
    <section className="bg-[#eef0f5] px-8 py-14">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 flex items-center">
          {STEPS.map((s, i) => (
            <Fragment key={s}>
              {i > 0 && <div className={\`mx-3 h-1 flex-1 rounded-full \${STEPS.indexOf(step) >= i ? 'bg-brand/50' : 'bg-ink/10'}\`} />}
              <div className={\`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold \${STEPS.indexOf(step) >= i ? 'bg-brand text-white' : 'bg-ink/[0.07] text-ink/35 font-semibold'} \${s === step ? 'ring-4 ring-brand/20' : ''}\`}>
                {i + 1}
              </div>
            </Fragment>
          ))}
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-brand">Étape 2 · Budget</p>
          <h2 className="mb-6 font-display text-2xl font-bold text-ink">Quel est votre budget ?</h2>
          <div className="mb-6 space-y-3">
            {BUDGETS.map(b => (
              <label key={b.id} className={\`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition \${budget === b.id ? 'border-brand/60 bg-brand/[0.05]' : 'border-ink/10 hover:border-brand/30'}\`} onClick={() => setBudget(b.id)}>
                <div className={\`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 \${budget === b.id ? 'border-brand' : 'border-ink/20'}\`}>
                  {budget === b.id && <div className="h-2.5 w-2.5 rounded-full bg-brand" />}
                </div>
                <span className={\`text-sm \${budget === b.id ? 'font-bold' : 'font-medium'} text-ink\`}>{b.label}</span>
                {b.popular && <span className="ml-auto rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">Populaire</span>}
              </label>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink/50" onClick={() => setStep('projet')}>← Retour</button>
            <button className="flex-1 rounded-xl bg-brand py-2.5 text-sm font-bold text-white" onClick={() => setStep('contact')}>Continuer →</button>
          </div>
        </div>
        <p className="mt-5 text-center font-mono text-xs text-ink/35">Sans engagement · Réponse sous 24 h</p>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'forms-auth',
    name: 'Connexion / Inscription',
    description: 'Interface d’authentification split : panel de marque à gauche, formulaire à droite.',
    previewHtml: `
<section class="flex" style="min-height:660px">
  <div class="hidden w-[42%] flex-col justify-between bg-ink px-12 py-12 lg:flex">
    <p class="font-display text-xl font-bold text-white">Acme</p>
    <div>
      <p class="font-display text-3xl font-bold leading-snug text-white">Bienvenue,<br/><span class="text-brand">content de vous revoir.</span></p>
      <p class="mt-3 text-sm text-white/40">Connectez-vous pour accéder à votre espace.</p>
    </div>
    <p class="font-mono text-xs text-white/15">acme.io · 2025</p>
  </div>
  <div class="flex flex-1 items-center justify-center bg-[#eef0f5] px-10 py-12">
    <div class="w-full max-w-[320px]">
      <h2 class="mb-1 font-display text-2xl font-bold text-ink">Connexion</h2>
      <p class="mb-7 text-sm text-ink/45">Pas encore de compte ? <span class="cursor-pointer font-semibold text-brand">S'inscrire →</span></p>
      <div class="mb-4 grid grid-cols-2 gap-3">
        <button class="flex items-center justify-center gap-2 rounded-xl border border-ink/[0.12] bg-white py-2.5 text-xs font-semibold text-ink/70">
          <span class="font-bold text-sm">G</span> Google
        </button>
        <button class="flex items-center justify-center gap-2 rounded-xl border border-ink/[0.12] bg-white py-2.5 text-xs font-semibold text-ink/70">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
          GitHub
        </button>
      </div>
      <div class="mb-5 flex items-center gap-3">
        <div class="h-px flex-1 bg-ink/[0.1]"></div>
        <span class="font-mono text-[11px] text-ink/30">ou</span>
        <div class="h-px flex-1 bg-ink/[0.1]"></div>
      </div>
      <div class="mb-3">
        <p class="mb-1.5 text-xs font-medium text-ink/45">E-mail</p>
        <div class="flex h-10 items-center rounded-xl border border-ink/[0.12] bg-white px-3.5 text-sm text-ink/55">martin@startup.fr</div>
      </div>
      <div class="mb-6">
        <div class="mb-1.5 flex justify-between">
          <p class="text-xs font-medium text-ink/45">Mot de passe</p>
          <span class="cursor-pointer font-mono text-[11px] text-brand">Oublié ?</span>
        </div>
        <div class="flex h-10 items-center rounded-xl border border-brand/40 bg-white px-3.5 ring-2 ring-brand/10">
          <span class="text-lg tracking-[0.3em] text-ink/40">••••••••</span>
        </div>
      </div>
      <button class="w-full rounded-xl bg-brand py-2.5 text-sm font-bold text-white">Se connecter →</button>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function AuthForm() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputCls = 'h-10 w-full rounded-xl border border-ink/[0.12] bg-white px-3.5 text-sm text-ink outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/10';

  return (
    <section className="flex min-h-screen">
      <div className="hidden w-[42%] flex-col justify-between bg-ink px-12 py-12 lg:flex">
        <p className="font-display text-xl font-bold text-white">Acme</p>
        <div>
          <p className="font-display text-3xl font-bold leading-snug text-white">
            Bienvenue,<br /><span className="text-brand">content de vous revoir.</span>
          </p>
          <p className="mt-3 text-sm text-white/40">Connectez-vous pour accéder à votre espace.</p>
        </div>
        <p className="font-mono text-xs text-white/15">acme.io · 2025</p>
      </div>
      <div className="flex flex-1 items-center justify-center bg-[#eef0f5] px-10 py-12">
        <div className="w-full max-w-[320px]">
          <h2 className="mb-1 font-display text-2xl font-bold text-ink">
            {mode === 'login' ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="mb-7 text-sm text-ink/45">
            {mode === 'login' ? 'Pas encore de compte ?' : 'Déjà inscrit ?'}{' '}
            <button className="font-semibold text-brand" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
              {mode === 'login' ? "S'inscrire →" : 'Se connecter →'}
            </button>
          </p>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-ink/[0.12] bg-white py-2.5 text-xs font-semibold text-ink/70">
              <span className="font-bold text-sm">G</span> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-ink/[0.12] bg-white py-2.5 text-xs font-semibold text-ink/70">
              GitHub
            </button>
          </div>
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-ink/10" />
            <span className="font-mono text-[11px] text-ink/30">ou</span>
            <div className="h-px flex-1 bg-ink/10" />
          </div>
          <div className="mb-3">
            <label className="mb-1.5 block text-xs font-medium text-ink/45">E-mail</label>
            <input type="email" className={inputCls} value={email} onChange={e => setEmail(e.target.value)} placeholder="vous@email.fr" />
          </div>
          <div className="mb-6">
            <div className="mb-1.5 flex justify-between">
              <label className="text-xs font-medium text-ink/45">Mot de passe</label>
              {mode === 'login' && <button className="font-mono text-[11px] text-brand">Oublié ?</button>}
            </div>
            <input type="password" className={inputCls} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button className="w-full rounded-xl bg-brand py-2.5 text-sm font-bold text-white transition hover:opacity-90">
            {mode === 'login' ? 'Se connecter →' : 'Créer mon compte →'}
          </button>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'forms-calculator',
    name: 'Calculateur / Simulateur',
    description: 'Curseurs interactifs avec résultat mis à jour en temps réel dans un encart dédié.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-12">
  <div class="mx-auto max-w-2xl">
    <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Outil</p>
    <h2 class="mb-2 font-display text-3xl font-bold text-ink">Estimez votre projet</h2>
    <p class="mb-8 text-sm text-ink/45">Ajustez les paramètres pour obtenir une estimation instantanée.</p>
    <div class="grid gap-5 md:grid-cols-2">
      <div class="rounded-2xl bg-white p-7 shadow-sm">
        <div class="mb-7">
          <div class="mb-3 flex justify-between">
            <p class="text-sm font-semibold text-ink">Durée du projet</p>
            <span class="font-mono text-sm font-bold text-brand">3 mois</span>
          </div>
          <div class="relative h-2 w-full rounded-full bg-ink/[0.08]">
            <div class="absolute left-0 h-2 w-1/2 rounded-full bg-brand"></div>
            <div class="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand shadow"></div>
          </div>
          <div class="mt-2 flex justify-between font-mono text-[11px] text-ink/30">
            <span>1 mois</span><span>6 mois</span>
          </div>
        </div>
        <div class="mb-7">
          <div class="mb-3 flex justify-between">
            <p class="text-sm font-semibold text-ink">Taille de l'équipe</p>
            <span class="font-mono text-sm font-bold text-brand">4 personnes</span>
          </div>
          <div class="relative h-2 w-full rounded-full bg-ink/[0.08]">
            <div class="absolute left-0 h-2 w-[55%] rounded-full bg-brand"></div>
            <div class="absolute left-[55%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand shadow"></div>
          </div>
          <div class="mt-2 flex justify-between font-mono text-[11px] text-ink/30">
            <span>1</span><span>10</span>
          </div>
        </div>
        <div>
          <p class="mb-3 text-sm font-semibold text-ink">Complexité</p>
          <div class="flex gap-2">
            <button class="rounded-lg border border-ink/[0.12] px-3 py-1.5 text-xs font-medium text-ink/50">Simple</button>
            <button class="rounded-lg border border-brand/50 bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand">Moyenne</button>
            <button class="rounded-lg border border-ink/[0.12] px-3 py-1.5 text-xs font-medium text-ink/50">Complexe</button>
          </div>
        </div>
      </div>
      <div class="flex flex-col rounded-2xl border border-brand/20 bg-brand/[0.07] p-7">
        <p class="mb-4 font-mono text-xs uppercase tracking-widest text-brand">Estimation</p>
        <div class="flex-1">
          <p class="font-display text-5xl font-bold text-ink">24 000 €</p>
          <p class="mt-1.5 text-sm text-ink/45">Budget estimé (HT)</p>
          <div class="mt-6 space-y-2.5 border-t border-ink/[0.08] pt-6">
            <div class="flex justify-between text-sm">
              <span class="text-ink/55">Développement</span>
              <span class="font-semibold text-ink">18 000 €</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-ink/55">Design</span>
              <span class="font-semibold text-ink">4 000 €</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-ink/55">Tests & déploiement</span>
              <span class="font-semibold text-ink">2 000 €</span>
            </div>
          </div>
        </div>
        <button class="mt-8 w-full rounded-xl bg-brand py-2.5 text-sm font-bold text-white">Demander un devis →</button>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Calculator() {
  const [duration, setDuration] = useState(3);
  const [team, setTeam] = useState(4);
  const [complexity, setComplexity] = useState<'simple' | 'moyenne' | 'complexe'>('moyenne');

  const baseRate = { simple: 4000, moyenne: 6000, complexe: 9000 }[complexity];
  const total = duration * team * baseRate * 0.25;
  const dev = Math.round(total * 0.75);
  const design = Math.round(total * 0.17);
  const tests = Math.round(total * 0.08);

  const fmt = (n: number) => new Intl.NumberFormat('fr-FR').format(Math.round(n / 100) * 100);

  return (
    <section className="bg-[#eef0f5] px-8 py-12">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Outil</p>
        <h2 className="mb-2 font-display text-3xl font-bold text-ink">Estimez votre projet</h2>
        <p className="mb-8 text-sm text-ink/45">Ajustez les paramètres pour obtenir une estimation instantanée.</p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="mb-7">
              <div className="mb-3 flex justify-between">
                <p className="text-sm font-semibold text-ink">Durée du projet</p>
                <span className="font-mono text-sm font-bold text-brand">{duration} mois</span>
              </div>
              <input type="range" min={1} max={6} value={duration} onChange={e => setDuration(+e.target.value)} className="w-full accent-brand" />
              <div className="mt-1 flex justify-between font-mono text-[11px] text-ink/30"><span>1 mois</span><span>6 mois</span></div>
            </div>
            <div className="mb-7">
              <div className="mb-3 flex justify-between">
                <p className="text-sm font-semibold text-ink">Taille de l'équipe</p>
                <span className="font-mono text-sm font-bold text-brand">{team} personnes</span>
              </div>
              <input type="range" min={1} max={10} value={team} onChange={e => setTeam(+e.target.value)} className="w-full accent-brand" />
              <div className="mt-1 flex justify-between font-mono text-[11px] text-ink/30"><span>1</span><span>10</span></div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-ink">Complexité</p>
              <div className="flex gap-2">
                {(['simple', 'moyenne', 'complexe'] as const).map(c => (
                  <button key={c} onClick={() => setComplexity(c)} className={\`rounded-lg border px-3 py-1.5 text-xs font-medium capitalize transition \${complexity === c ? 'border-brand/50 bg-brand/10 font-bold text-brand' : 'border-ink/[0.12] text-ink/50 hover:border-brand/30'}\`}>{c}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl border border-brand/20 bg-brand/[0.07] p-7">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-brand">Estimation</p>
            <div className="flex-1">
              <p className="font-display text-5xl font-bold text-ink">{fmt(total)} €</p>
              <p className="mt-1.5 text-sm text-ink/45">Budget estimé (HT)</p>
              <div className="mt-6 space-y-2.5 border-t border-ink/[0.08] pt-6">
                {[['Développement', dev], ['Design', design], ['Tests & déploiement', tests]].map(([l, v]) => (
                  <div key={l as string} className="flex justify-between text-sm">
                    <span className="text-ink/55">{l}</span>
                    <span className="font-semibold text-ink">{fmt(v as number)} €</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-8 w-full rounded-xl bg-brand py-2.5 text-sm font-bold text-white transition hover:opacity-90">Demander un devis →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'forms-quiz',
    name: 'Quiz d’onboarding',
    description: 'Questions à choix multiples sous forme de cartes avec icônes — idéal pour qualifier un lead.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-14">
  <div class="mx-auto max-w-2xl">
    <div class="mb-3 flex items-center justify-between">
      <p class="font-mono text-xs text-ink/40">Question 2 / 4</p>
      <p class="font-mono text-xs font-bold text-brand">50 %</p>
    </div>
    <div class="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.08]">
      <div class="h-full w-1/2 rounded-full bg-brand transition-all"></div>
    </div>
    <h2 class="mb-2 font-display text-3xl font-bold text-ink">Quel est votre profil ?</h2>
    <p class="mb-8 text-sm text-ink/50">Choisissez l'option qui vous correspond le mieux.</p>
    <div class="grid grid-cols-2 gap-4">
      <div class="cursor-pointer rounded-2xl border border-brand/50 bg-brand/[0.06] p-6 ring-2 ring-brand/20">
        <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-2xl">💻</div>
        <p class="font-display text-base font-bold text-ink">Développeur</p>
        <p class="mt-1 text-sm text-ink/45">Je code et veux gagner du temps sur le setup.</p>
      </div>
      <div class="cursor-pointer rounded-2xl border border-ink/[0.1] bg-white p-6 transition hover:border-brand/30">
        <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.06] text-2xl">🎨</div>
        <p class="font-display text-base font-bold text-ink">Designer</p>
        <p class="mt-1 text-sm text-ink/45">Je conçois et veux livrer du code propre.</p>
      </div>
      <div class="cursor-pointer rounded-2xl border border-ink/[0.1] bg-white p-6 transition hover:border-brand/30">
        <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.06] text-2xl">🚀</div>
        <p class="font-display text-base font-bold text-ink">Fondateur</p>
        <p class="mt-1 text-sm text-ink/45">Je construis un produit et veux aller vite.</p>
      </div>
      <div class="cursor-pointer rounded-2xl border border-ink/[0.1] bg-white p-6 transition hover:border-brand/30">
        <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.06] text-2xl">🏢</div>
        <p class="font-display text-base font-bold text-ink">Agence</p>
        <p class="mt-1 text-sm text-ink/45">Je gère des projets clients et veux scaler.</p>
      </div>
    </div>
    <div class="mt-6 flex gap-3">
      <button class="rounded-xl border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink/50">← Précédent</button>
      <button class="flex-1 rounded-xl bg-brand py-2.5 text-sm font-bold text-white">Suivant →</button>
    </div>
  </div>
</section>`.trim(),
    tsx: `const QUESTIONS = [
  {
    id: 'profil',
    question: 'Quel est votre profil ?',
    hint: 'Choisissez l’option qui vous correspond le mieux.',
    choices: [
      { id: 'dev',      emoji: '💻', label: 'Développeur', desc: 'Je code et veux gagner du temps sur le setup.' },
      { id: 'design',   emoji: '🎨', label: 'Designer',    desc: 'Je conçois et veux livrer du code propre.' },
      { id: 'founder',  emoji: '🚀', label: 'Fondateur',   desc: 'Je construis un produit et veux aller vite.' },
      { id: 'agency',   emoji: '🏢', label: 'Agence',      desc: 'Je gère des projets clients et veux scaler.' },
    ],
  },
];

export default function OnboardingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const q = QUESTIONS[step];
  const selected = answers[q.id];

  return (
    <section className="bg-[#eef0f5] px-8 py-14">
      <div className="mx-auto max-w-2xl">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-xs text-ink/40">Question {step + 1} / {QUESTIONS.length}</p>
          <p className="font-mono text-xs font-bold text-brand">{Math.round(((step + 1) / QUESTIONS.length) * 100)} %</p>
        </div>
        <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.08]">
          <div className="h-full rounded-full bg-brand transition-all" style={{ width: \`\${((step + 1) / QUESTIONS.length) * 100}%\` }} />
        </div>
        <h2 className="mb-2 font-display text-3xl font-bold text-ink">{q.question}</h2>
        <p className="mb-8 text-sm text-ink/50">{q.hint}</p>
        <div className="grid grid-cols-2 gap-4">
          {q.choices.map(c => (
            <button key={c.id} onClick={() => setAnswers({ ...answers, [q.id]: c.id })}
              className={\`rounded-2xl border p-6 text-left transition \${selected === c.id ? 'border-brand/50 bg-brand/[0.06] ring-2 ring-brand/20' : 'border-ink/10 bg-white hover:border-brand/30'}\`}>
              <div className={\`mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-2xl \${selected === c.id ? 'bg-brand/15' : 'bg-ink/[0.06]'}\`}>{c.emoji}</div>
              <p className="font-display text-base font-bold text-ink">{c.label}</p>
              <p className="mt-1 text-sm text-ink/45">{c.desc}</p>
            </button>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          {step > 0 && <button className="rounded-xl border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink/50" onClick={() => setStep(step - 1)}>← Précédent</button>}
          <button disabled={!selected} className="flex-1 rounded-xl bg-brand py-2.5 text-sm font-bold text-white transition disabled:opacity-30" onClick={() => step < QUESTIONS.length - 1 ? setStep(step + 1) : alert('Merci !')}>
            {step < QUESTIONS.length - 1 ? 'Suivant →' : 'Terminer →'}
          </button>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'forms-newsletter',
    name: 'Capture de leads / Newsletter',
    description: 'Section sombre centrée avec champ e-mail, preuve sociale et statistiques de communauté.',
    previewHtml: `
<section class="bg-ink px-8 py-16">
  <div class="mx-auto max-w-xl text-center">
    <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5">
      <span class="h-2 w-2 rounded-full bg-green-400"></span>
      <span class="font-mono text-xs text-white/50">3 400 abonnés actifs</span>
    </div>
    <h2 class="mb-3 font-display text-4xl font-bold text-white">Restez dans la boucle</h2>
    <p class="mb-10 text-base text-white/40">Conseils, ressources et nouveautés — une fois par semaine, sans spam.</p>
    <div class="mx-auto flex max-w-sm gap-2">
      <div class="flex h-11 flex-1 items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white/45">votre@email.com</div>
      <button class="h-11 rounded-xl bg-brand px-5 text-sm font-bold text-white whitespace-nowrap">S'inscrire →</button>
    </div>
    <p class="mt-4 font-mono text-xs text-white/25">Désinscription en 1 clic · RGPD</p>
    <div class="mt-12 flex items-center justify-center gap-8">
      <div class="text-center">
        <p class="font-display text-2xl font-bold text-white">3 400+</p>
        <p class="mt-1 font-mono text-xs text-white/35">abonnés</p>
      </div>
      <div class="h-8 w-px bg-white/10"></div>
      <div class="text-center">
        <p class="font-display text-2xl font-bold text-white">52 %</p>
        <p class="mt-1 font-mono text-xs text-white/35">taux d'ouverture</p>
      </div>
      <div class="h-8 w-px bg-white/10"></div>
      <div class="text-center">
        <p class="font-display text-2xl font-bold text-white">Chaque vendredi</p>
        <p class="mt-1 font-mono text-xs text-white/35">publication</p>
      </div>
    </div>
    <div class="mt-12 flex flex-col gap-3">
      <div class="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4 text-left">
        <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/20 text-sm">✦</div>
        <div>
          <p class="text-sm font-semibold text-white/80">Tendances React & TypeScript</p>
          <p class="mt-0.5 text-xs text-white/35">Édition #52 · 2 500 lectures</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4 text-left">
        <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-sm">✦</div>
        <div>
          <p class="text-sm font-semibold text-white/80">Les meilleurs outils no-code du mois</p>
          <p class="mt-0.5 text-xs text-white/35">Édition #51 · 1 980 lectures</p>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-ink px-8 py-16">
      <div className="mx-auto max-w-xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="font-mono text-xs text-white/50">3 400 abonnés actifs</span>
        </div>
        <h2 className="mb-3 font-display text-4xl font-bold text-white">Restez dans la boucle</h2>
        <p className="mb-10 text-base text-white/40">Conseils, ressources et nouveautés — une fois par semaine, sans spam.</p>
        {submitted ? (
          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
            <p className="font-display text-xl font-bold text-white">Merci ! 🎉</p>
            <p className="mt-2 text-sm text-white/50">Vous recevrez notre prochaine édition vendredi.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-sm gap-2">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com"
              className="h-11 flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/15" />
            <button type="submit" className="h-11 rounded-xl bg-brand px-5 text-sm font-bold text-white transition hover:opacity-90 whitespace-nowrap">S'inscrire →</button>
          </form>
        )}
        <p className="mt-4 font-mono text-xs text-white/25">Désinscription en 1 clic · RGPD</p>
        <div className="mt-10 flex items-center justify-center gap-8">
          {[['3 400+', 'abonnés'], ['52 %', "taux d'ouverture"], ['Chaque vendredi', 'publication']].map(([v, l], i, a) => (
            <>
              <div key={v} className="text-center">
                <p className="font-display text-2xl font-bold text-white">{v}</p>
                <p className="mt-1 font-mono text-xs text-white/35">{l}</p>
              </div>
              {i < a.length - 1 && <div className="h-8 w-px bg-white/10" />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'forms-feedback',
    name: 'Feedback / Avis produit',
    description: 'Notation par étoiles avec catégories, zone de commentaire et bouton de soumission.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-12">
  <div class="mx-auto max-w-lg">
    <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Feedback</p>
    <h2 class="mb-2 font-display text-3xl font-bold text-ink">Votre avis compte</h2>
    <p class="mb-8 text-sm text-ink/45">Partagez votre expérience en 30 secondes.</p>
    <div class="rounded-2xl bg-white p-8 shadow-sm">
      <p class="mb-3 text-sm font-semibold text-ink">Note globale</p>
      <div class="mb-6 flex items-center gap-1">
        <span class="cursor-pointer text-[26px] leading-none" style="color:#ffb020">★</span>
        <span class="cursor-pointer text-[26px] leading-none" style="color:#ffb020">★</span>
        <span class="cursor-pointer text-[26px] leading-none" style="color:#ffb020">★</span>
        <span class="cursor-pointer text-[26px] leading-none text-ink/20">★</span>
        <span class="cursor-pointer text-[26px] leading-none text-ink/20">★</span>
        <span class="ml-3 font-mono text-xs text-ink/40">3 / 5</span>
      </div>
      <div class="mb-6 space-y-3">
        <div class="flex items-center gap-4">
          <span class="w-20 text-sm text-ink/55">Facilité</span>
          <div class="flex gap-0.5">
            <span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span class="text-ink/20">★</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-20 text-sm text-ink/55">Qualité</span>
          <div class="flex gap-0.5">
            <span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span class="text-ink/20">★</span><span class="text-ink/20">★</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-20 text-sm text-ink/55">Support</span>
          <div class="flex gap-0.5">
            <span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span style="color:#ffb020">★</span><span style="color:#ffb020">★</span>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <p class="mb-1.5 text-xs font-medium text-ink/45">Votre commentaire (optionnel)</p>
        <div class="h-24 rounded-xl border border-brand/40 px-3.5 py-3 text-sm text-ink/50 ring-2 ring-brand/10">Très bonne expérience globale, l'outil m'a vraiment fait gagner du temps sur le setup…</div>
      </div>
      <div class="mb-5">
        <p class="mb-1.5 text-xs font-medium text-ink/45">Votre prénom (optionnel)</p>
        <div class="flex h-10 items-center rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink/50">Martin</div>
      </div>
      <button class="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white">Envoyer mon avis →</button>
    </div>
  </div>
</section>`.trim(),
    tsx: `const CATEGORIES = [
  { id: 'facilite', label: 'Facilité',  defaultRating: 4 },
  { id: 'qualite',  label: 'Qualité',   defaultRating: 3 },
  { id: 'support',  label: 'Support',   defaultRating: 5 },
];

function StarRating({ value, onChange, size = 'md' }: { value: number; onChange: (v: number) => void; size?: 'sm' | 'md' }) {
  const [hovered, setHovered] = useState(0);
  const sz = size === 'sm' ? 'text-lg' : 'text-[26px]';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <button key={star} type="button" className={\`leading-none \${sz}\`}
          style={{ color: star <= (hovered || value) ? '#ffb020' : 'rgba(20,18,31,0.2)' }}
          onMouseEnter={() => setHovered(star)} onMouseLeave={() => setHovered(0)} onClick={() => onChange(star)}>★</button>
      ))}
    </div>
  );
}

export default function Feedback() {
  const [globalRating, setGlobalRating] = useState(3);
  const [ratings, setRatings] = useState<Record<string, number>>(Object.fromEntries(CATEGORIES.map(c => [c.id, c.defaultRating])));
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return (
    <section className="bg-[#eef0f5] px-8 py-12">
      <div className="mx-auto max-w-lg text-center py-16">
        <p className="mb-3 text-4xl">🎉</p>
        <h2 className="font-display text-2xl font-bold text-ink">Merci pour votre avis !</h2>
        <p className="mt-2 text-sm text-ink/45">Votre retour nous aide à améliorer le produit.</p>
      </div>
    </section>
  );

  return (
    <section className="bg-[#eef0f5] px-8 py-12">
      <div className="mx-auto max-w-lg">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Feedback</p>
        <h2 className="mb-2 font-display text-3xl font-bold text-ink">Votre avis compte</h2>
        <p className="mb-8 text-sm text-ink/45">Partagez votre expérience en 30 secondes.</p>
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold text-ink">Note globale</p>
          <div className="mb-6 flex items-center gap-3">
            <StarRating value={globalRating} onChange={setGlobalRating} />
            <span className="font-mono text-xs text-ink/40">{globalRating} / 5</span>
          </div>
          <div className="mb-6 space-y-3">
            {CATEGORIES.map(c => (
              <div key={c.id} className="flex items-center gap-4">
                <span className="w-20 text-sm text-ink/55">{c.label}</span>
                <StarRating size="sm" value={ratings[c.id]} onChange={v => setRatings({ ...ratings, [c.id]: v })} />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium text-ink/45">Votre commentaire (optionnel)</label>
            <textarea rows={3} value={comment} onChange={e => setComment(e.target.value)} placeholder="Partagez votre expérience…"
              className="w-full resize-none rounded-xl border border-ink/[0.1] px-3.5 py-3 text-sm text-ink outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/10" />
          </div>
          <div className="mb-5">
            <label className="mb-1.5 block text-xs font-medium text-ink/45">Votre prénom (optionnel)</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Martin"
              className="h-10 w-full rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/10" />
          </div>
          <button onClick={() => setSubmitted(true)} className="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white transition hover:opacity-90">Envoyer mon avis →</button>
        </div>
      </div>
    </section>
  );
}
`,
  },
];
