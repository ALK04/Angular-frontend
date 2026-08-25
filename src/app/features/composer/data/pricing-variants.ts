import { BrickVariant } from '../../../models/brick-variant.model';

export const PRICING_VARIANTS: BrickVariant[] = [
  {
    id: 'pricing-3-plans',
    name: '3 plans',
    description: 'Starter, Pro (mis en avant) et Enterprise. Simple et lisible.',
    previewHtml: `
<section class="bg-white px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="mb-12 text-center">
      <h2 class="mb-3 font-display text-3xl font-bold tracking-tight text-ink">Tarifs simples et transparents</h2>
      <p class="text-sm text-ink/50">Sans engagement. Changez de plan à tout moment.</p>
    </div>
    <div class="grid gap-6 sm:grid-cols-3">
      <div class="rounded-2xl border border-ink/10 p-6">
        <p class="mb-1 text-sm font-semibold text-ink/50">Starter</p>
        <p class="mb-4 font-display text-3xl font-bold text-ink">Gratuit</p>
        <ul class="mb-6 space-y-2 text-sm text-ink/60">
          <li>✓ 1 projet</li>
          <li>✓ 5 pages max</li>
          <li>✓ Export basique</li>
        </ul>
        <a href="#" class="block rounded-full border border-ink/20 py-2.5 text-center text-sm font-semibold text-ink transition hover:border-ink/40">Commencer</a>
      </div>
      <div class="relative rounded-2xl border-2 border-brand bg-brand/[0.04] p-6 shadow-lg shadow-brand/10">
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-xs font-bold text-white">Populaire</span>
        <p class="mb-1 text-sm font-semibold text-brand">Pro</p>
        <p class="mb-4 font-display text-3xl font-bold text-ink">29€<span class="text-base font-normal text-ink/40">/mois</span></p>
        <ul class="mb-6 space-y-2 text-sm text-ink/60">
          <li>✓ Projets illimités</li>
          <li>✓ Pages illimitées</li>
          <li>✓ Export complet</li>
          <li>✓ Support prioritaire</li>
        </ul>
        <a href="#" class="block rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-dark">Choisir Pro</a>
      </div>
      <div class="rounded-2xl border border-ink/10 p-6">
        <p class="mb-1 text-sm font-semibold text-ink/50">Enterprise</p>
        <p class="mb-4 font-display text-3xl font-bold text-ink">Sur devis</p>
        <ul class="mb-6 space-y-2 text-sm text-ink/60">
          <li>✓ Tout ce qui est en Pro</li>
          <li>✓ SSO & audit log</li>
          <li>✓ SLA garanti</li>
        </ul>
        <a href="#" class="block rounded-full border border-ink/20 py-2.5 text-center text-sm font-semibold text-ink transition hover:border-ink/40">Nous contacter</a>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const plans = [
  {
    name: 'Starter',
    price: 'Gratuit',
    features: ['1 projet', '5 pages max', 'Export basique'],
    cta: 'Commencer',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '29€',
    period: '/mois',
    features: ['Projets illimités', 'Pages illimitées', 'Export complet', 'Support prioritaire'],
    cta: 'Choisir Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    features: ['Tout ce qui est en Pro', 'SSO & audit log', 'SLA garanti'],
    cta: 'Nous contacter',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-ink">
            Tarifs simples et transparents
          </h2>
          <p className="text-sm text-ink/50">Sans engagement. Changez de plan à tout moment.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={
                plan.highlight
                  ? 'relative rounded-2xl border-2 border-brand bg-brand/[0.04] p-6 shadow-lg shadow-brand/10'
                  : 'rounded-2xl border border-ink/10 p-6'
              }
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-xs font-bold text-white">
                  Populaire
                </span>
              )}
              <p className={\`mb-1 text-sm font-semibold \${plan.highlight ? 'text-brand' : 'text-ink/50'}\`}>
                {plan.name}
              </p>
              <p className="mb-4 font-display text-3xl font-bold text-ink">
                {plan.price}
                {'period' in plan && (
                  <span className="text-base font-normal text-ink/40">{plan.period}</span>
                )}
              </p>
              <ul className="mb-6 space-y-2 text-sm text-ink/60">
                {plan.features.map(f => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a
                href="#"
                className={
                  plan.highlight
                    ? 'block rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-dark'
                    : 'block rounded-full border border-ink/20 py-2.5 text-center text-sm font-semibold text-ink transition hover:border-ink/40'
                }
              >
                {plan.cta}
              </a>
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
