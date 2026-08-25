import { BrickVariant } from '../../../models/brick-variant.model';

export const FOOTER_VARIANTS: BrickVariant[] = [
  {
    id: 'footer-sombre',
    name: '4 colonnes sombre',
    description: 'Fond noir, colonne marque à gauche avec réseaux sociaux, 3 colonnes de liens, barre de copyright.',
    previewHtml: `
<footer class="bg-[#0f0d1a] px-8 py-10">
  <div class="mx-auto max-w-5xl">
    <div class="mb-8 grid grid-cols-4 gap-8">
      <div>
        <div class="mb-2 font-display text-base font-bold text-white">Calque</div>
        <p class="mb-5 text-xs leading-relaxed text-white/35">Le générateur de projets React + Node.js pour les devs qui veulent coder, pas configurer.</p>
        <div class="flex gap-2">
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.07]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-white/40"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
          </div>
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.07]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-white/40"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </div>
        </div>
      </div>
      <div>
        <div class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/25">Produit</div>
        <ul class="space-y-2.5 text-xs text-white/45"><li>Fonctionnalités</li><li>Templates</li><li>Tarifs</li><li>Changelog</li></ul>
      </div>
      <div>
        <div class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/25">Ressources</div>
        <ul class="space-y-2.5 text-xs text-white/45"><li>Documentation</li><li>Blog</li><li>Exemples</li><li>GitHub</li></ul>
      </div>
      <div>
        <div class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/25">Entreprise</div>
        <ul class="space-y-2.5 text-xs text-white/45"><li>À propos</li><li>Contact</li><li>Mentions légales</li><li>Confidentialité</li></ul>
      </div>
    </div>
    <div class="flex items-center justify-between border-t border-white/[0.07] pt-6 text-xs text-white/20">
      <span>© 2025 Calque · Tous droits réservés.</span>
      <span>Fait avec ♥ à Paris</span>
    </div>
  </div>
</footer>`.trim(),
    tsx: `const links = {
  Produit:    ['Fonctionnalités', 'Templates', 'Tarifs', 'Changelog'],
  Ressources: ['Documentation', 'Blog', 'Exemples', 'GitHub'],
  Entreprise: ['À propos', 'Contact', 'Mentions légales', 'Confidentialité'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f0d1a] px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 grid grid-cols-4 gap-8">
          <div>
            <div className="mb-2 font-display text-base font-bold text-white">Calque</div>
            <p className="mb-5 text-xs leading-relaxed text-white/35">Le générateur de projets React + Node.js pour les devs qui veulent coder, pas configurer.</p>
            {/* Social icons */}
          </div>
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/25">{heading}</div>
              <ul className="space-y-2.5">
                {items.map(item => <li key={item}><a href="#" className="text-xs text-white/45 transition hover:text-white">{item}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-white/[0.07] pt-6 text-xs text-white/20">
          <span>© 2025 Calque · Tous droits réservés.</span>
          <span>Fait avec ♥ à Paris</span>
        </div>
      </div>
    </footer>
  );
}
`,
  },
  {
    id: 'footer-newsletter',
    name: 'Newsletter + liens',
    description: 'Bandeau newsletter en haut (inscription), puis 3 colonnes de liens et copyright.',
    previewHtml: `
<footer class="bg-[#0f0d1a] px-8 py-8">
  <div class="mx-auto max-w-5xl">
    <div class="mb-6 flex items-center justify-between gap-12 border-b border-white/[0.07] pb-6">
      <div>
        <p class="mb-0.5 font-mono text-xs uppercase tracking-widest text-brand">Newsletter</p>
        <h3 class="font-display text-lg font-bold text-white">Restez informé</h3>
        <p class="text-xs text-white/35">Articles, tutos et updates — une fois par mois.</p>
      </div>
      <div class="flex flex-shrink-0 gap-2">
        <div class="flex h-10 w-52 items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white/30">votre@email.fr</div>
        <button class="flex-shrink-0 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white">S'abonner →</button>
      </div>
    </div>
    <div class="mb-6 grid grid-cols-4 gap-8">
      <div>
        <div class="mb-1 font-display text-sm font-bold text-white">Calque</div>
        <p class="text-xs text-white/30">Composez votre interface. Le code suit.</p>
      </div>
      <div>
        <div class="mb-3 text-xs font-semibold uppercase tracking-widest text-white/25">Produit</div>
        <ul class="space-y-2 text-xs text-white/40"><li>Fonctionnalités</li><li>Templates</li><li>Tarifs</li></ul>
      </div>
      <div>
        <div class="mb-3 text-xs font-semibold uppercase tracking-widest text-white/25">Ressources</div>
        <ul class="space-y-2 text-xs text-white/40"><li>Documentation</li><li>Blog</li><li>GitHub</li></ul>
      </div>
      <div>
        <div class="mb-3 text-xs font-semibold uppercase tracking-widest text-white/25">Légal</div>
        <ul class="space-y-2 text-xs text-white/40"><li>Mentions légales</li><li>Confidentialité</li><li>CGU</li></ul>
      </div>
    </div>
    <div class="border-t border-white/[0.07] pt-5 text-xs text-white/20">© 2025 Calque · Tous droits réservés.</div>
  </div>
</footer>`.trim(),
    tsx: `export default function Footer() {
  const [email, setEmail] = useState('');
  return (
    <footer className="bg-[#0f0d1a] px-8 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-12 border-b border-white/[0.07] pb-6">
          <div>
            <p className="mb-0.5 font-mono text-xs uppercase tracking-widest text-brand">Newsletter</p>
            <h3 className="font-display text-lg font-bold text-white">Restez informé</h3>
            <p className="text-xs text-white/35">Articles, tutos et updates — une fois par mois.</p>
          </div>
          <div className="flex flex-shrink-0 gap-2">
            <input
              type="email"
              placeholder="votre@email.fr"
              className="h-10 w-52 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white/70 outline-none placeholder:text-white/30 focus:border-brand/50 focus:ring-2 focus:ring-brand/15"
              value={email} onChange={e => setEmail(e.target.value)}
            />
            <button className="flex-shrink-0 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">S'abonner →</button>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-4 gap-8">
          <div>
            <div className="mb-1 font-display text-sm font-bold text-white">Calque</div>
            <p className="text-xs text-white/30">Composez votre interface. Le code suit.</p>
          </div>
          {/* colonnes de liens */}
        </div>
        <div className="border-t border-white/[0.07] pt-5 text-xs text-white/20">© 2025 Calque · Tous droits réservés.</div>
      </div>
    </footer>
  );
}
`,
  },
  {
    id: 'footer-clair',
    name: '4 colonnes clair',
    description: 'Fond gris doux, même structure que le sombre, identité visuelle légère avec réseaux sociaux.',
    previewHtml: `
<footer class="border-t border-ink/[0.07] bg-[#eef0f5] px-8 py-10">
  <div class="mx-auto max-w-5xl">
    <div class="mb-8 grid grid-cols-4 gap-8">
      <div>
        <div class="mb-2 font-display text-base font-bold text-ink">Calque</div>
        <p class="mb-5 text-xs leading-relaxed text-ink/45">Le générateur de projets React + Node.js pour les devs qui veulent coder, pas configurer.</p>
        <div class="flex gap-2">
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.07]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-ink/35"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
          </div>
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.07]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-ink/35"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </div>
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.07]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-ink/35"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </div>
        </div>
      </div>
      <div>
        <div class="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/30">Produit</div>
        <ul class="space-y-2.5 text-xs text-ink/50"><li>Fonctionnalités</li><li>Templates</li><li>Tarifs</li><li>Changelog</li></ul>
      </div>
      <div>
        <div class="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/30">Ressources</div>
        <ul class="space-y-2.5 text-xs text-ink/50"><li>Documentation</li><li>Blog</li><li>Exemples</li><li>GitHub</li></ul>
      </div>
      <div>
        <div class="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/30">Entreprise</div>
        <ul class="space-y-2.5 text-xs text-ink/50"><li>À propos</li><li>Contact</li><li>Mentions légales</li><li>Confidentialité</li></ul>
      </div>
    </div>
    <div class="flex items-center justify-between border-t border-ink/[0.08] pt-6 text-xs text-ink/30">
      <span>© 2025 Calque · Tous droits réservés.</span>
      <span>Fait avec ♥ à Paris</span>
    </div>
  </div>
</footer>`.trim(),
    tsx: `// Identique à footer-sombre, avec les classes bg/text inversées pour le mode clair.
export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.07] bg-[#eef0f5] px-8 py-10">
      {/* Même structure que 4 colonnes sombre */}
    </footer>
  );
}
`,
  },
];
