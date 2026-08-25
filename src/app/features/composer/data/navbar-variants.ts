import { BrickVariant } from '../../../models/brick-variant.model';

/**
 * Catalogue des navbars proposées à l'étape 1.
 * `previewHtml` (class=…) alimente l'iframe d'aperçu ;
 * `tsx` (className=…) est la source React copiée dans le projet généré.
 * La couleur d'accent est portée par la classe `brand` (injectée à l'aperçu),
 * donc on n'écrit jamais de couleur en dur ici.
 */
export const NAVBAR_VARIANTS: BrickVariant[] = [
  {
    id: 'navbar-epuree',
    name: 'Épurée',
    description: 'Translucide, logo à gauche, liens à droite, bouton plein.',
    previewHtml: `
<header class="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur">
  <div class="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
    <a href="#" class="flex items-center gap-2 font-display text-lg font-bold text-ink">
      <span class="grid h-7 w-7 place-items-center rounded-lg bg-brand text-white">C</span>
      Mon site
    </a>
    <nav class="ml-auto hidden items-center gap-7 text-sm text-ink/70 sm:flex">
      <a href="#" class="hover:text-ink">Accueil</a>
      <a href="#" class="hover:text-ink">Produit</a>
      <a href="#" class="hover:text-ink">Tarifs</a>
      <a href="#" class="hover:text-ink">Contact</a>
    </nav>
    <a href="#" class="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">Commencer</a>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
        <a href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-white">C</span>
          Mon site
        </a>
        <nav className="ml-auto hidden items-center gap-7 text-sm text-ink/70 sm:flex">
          <a href="#" className="hover:text-ink">Accueil</a>
          <a href="#" className="hover:text-ink">Produit</a>
          <a href="#" className="hover:text-ink">Tarifs</a>
          <a href="#" className="hover:text-ink">Contact</a>
        </nav>
        <a href="#" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
          Commencer
        </a>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-contraste',
    name: 'Contraste',
    description: 'Bandeau sombre, navigation en pilule, accent vif.',
    previewHtml: `
<header class="sticky top-0 z-50 bg-ink text-white">
  <div class="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
    <a href="#" class="font-display text-lg font-bold">Mon site</a>
    <nav class="ml-auto hidden items-center gap-1 rounded-full bg-white/10 p-1 text-sm sm:flex">
      <a href="#" class="rounded-full bg-white px-4 py-1.5 font-medium text-ink">Accueil</a>
      <a href="#" class="rounded-full px-4 py-1.5 text-white/70 transition hover:text-white">Produit</a>
      <a href="#" class="rounded-full px-4 py-1.5 text-white/70 transition hover:text-white">Tarifs</a>
      <a href="#" class="rounded-full px-4 py-1.5 text-white/70 transition hover:text-white">Contact</a>
    </nav>
    <a href="#" class="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">Commencer</a>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
        <a href="/" className="font-display text-lg font-bold">Mon site</a>
        <nav className="ml-auto hidden items-center gap-1 rounded-full bg-white/10 p-1 text-sm sm:flex">
          <a href="#" className="rounded-full bg-white px-4 py-1.5 font-medium text-ink">Accueil</a>
          <a href="#" className="rounded-full px-4 py-1.5 text-white/70 transition hover:text-white">Produit</a>
          <a href="#" className="rounded-full px-4 py-1.5 text-white/70 transition hover:text-white">Tarifs</a>
          <a href="#" className="rounded-full px-4 py-1.5 text-white/70 transition hover:text-white">Contact</a>
        </nav>
        <a href="#" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
          Commencer
        </a>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-logo-droite',
    name: 'Logo à droite',
    description: 'Liens à gauche, logo aligné à droite. Inversé.',
    previewHtml: `
<header class="border-b border-ink/10 bg-white">
  <div class="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
    <nav class="hidden items-center gap-7 text-sm text-ink/70 sm:flex">
      <a href="#" class="hover:text-ink">Produit</a>
      <a href="#" class="hover:text-ink">Tarifs</a>
      <a href="#" class="hover:text-ink">Ressources</a>
      <a href="#" class="hover:text-ink">Contact</a>
    </nav>
    <a href="#" class="ml-auto flex items-center gap-2 font-display text-lg font-bold text-ink">
      Mon site
      <span class="grid h-7 w-7 place-items-center rounded-lg bg-brand text-white">C</span>
    </a>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-white">
      <div className="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
        <nav className="hidden items-center gap-7 text-sm text-ink/70 sm:flex">
          <a href="#" className="hover:text-ink">Produit</a>
          <a href="#" className="hover:text-ink">Tarifs</a>
          <a href="#" className="hover:text-ink">Ressources</a>
          <a href="#" className="hover:text-ink">Contact</a>
        </nav>
        <a href="/" className="ml-auto flex items-center gap-2 font-display text-lg font-bold text-ink">
          Mon site
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-white">C</span>
        </a>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-centree',
    name: 'Logo centré',
    description: 'Logo au centre, liens répartis de part et d’autre.',
    previewHtml: `
<header class="border-b border-ink/10 bg-white">
  <div class="mx-auto grid h-16 max-w-4xl grid-cols-3 items-center px-6">
    <nav class="hidden items-center gap-6 text-sm text-ink/70 sm:flex">
      <a href="#" class="hover:text-ink">Accueil</a>
      <a href="#" class="hover:text-ink">Produit</a>
    </nav>
    <a href="#" class="justify-self-center font-display text-lg font-bold text-ink">Mon site</a>
    <nav class="hidden items-center justify-end gap-6 text-sm text-ink/70 sm:flex">
      <a href="#" class="hover:text-ink">Tarifs</a>
      <a href="#" class="hover:text-ink">Contact</a>
    </nav>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-white">
      <div className="mx-auto grid h-16 max-w-4xl grid-cols-3 items-center px-6">
        <nav className="hidden items-center gap-6 text-sm text-ink/70 sm:flex">
          <a href="#" className="hover:text-ink">Accueil</a>
          <a href="#" className="hover:text-ink">Produit</a>
        </nav>
        <a href="/" className="justify-self-center font-display text-lg font-bold text-ink">Mon site</a>
        <nav className="hidden items-center justify-end gap-6 text-sm text-ink/70 sm:flex">
          <a href="#" className="hover:text-ink">Tarifs</a>
          <a href="#" className="hover:text-ink">Contact</a>
        </nav>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-flottante',
    name: 'Pilule flottante',
    description: 'Barre détachée, arrondie, ombrée, avec marge autour.',
    previewHtml: `
<div class="px-6 pt-4">
  <header class="mx-auto flex h-14 max-w-5xl items-center gap-8 rounded-full border border-ink/10 bg-white/90 px-6 shadow-lg backdrop-blur">
    <a href="#" class="font-display text-lg font-bold text-ink">Mon site</a>
    <nav class="ml-auto hidden items-center gap-7 text-sm text-ink/70 sm:flex">
      <a href="#" class="hover:text-ink">Accueil</a>
      <a href="#" class="hover:text-ink">Produit</a>
      <a href="#" class="hover:text-ink">Tarifs</a>
    </nav>
    <a href="#" class="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">Essayer</a>
  </header>
</div>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <div className="px-6 pt-4">
      <header className="mx-auto flex h-14 max-w-5xl items-center gap-8 rounded-full border border-ink/10 bg-white/90 px-6 shadow-lg backdrop-blur">
        <a href="/" className="font-display text-lg font-bold text-ink">Mon site</a>
        <nav className="ml-auto hidden items-center gap-7 text-sm text-ink/70 sm:flex">
          <a href="#" className="hover:text-ink">Accueil</a>
          <a href="#" className="hover:text-ink">Produit</a>
          <a href="#" className="hover:text-ink">Tarifs</a>
        </nav>
        <a href="#" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
          Essayer
        </a>
      </header>
    </div>
  );
}
`,
  },

  {
    id: 'navbar-soulignee',
    name: 'Soulignée',
    description: 'Lien actif souligné par l’accent, sans bouton.',
    previewHtml: `
<header class="border-b border-ink/10 bg-white">
  <div class="mx-auto flex h-16 max-w-4xl items-center gap-10 px-6">
    <a href="#" class="font-display text-lg font-bold text-ink">Mon site</a>
    <nav class="hidden items-center gap-8 text-sm sm:flex">
      <a href="#" class="border-b-2 border-brand pb-1 font-medium text-ink">Accueil</a>
      <a href="#" class="border-b-2 border-transparent pb-1 text-ink/60 transition hover:text-ink">Produit</a>
      <a href="#" class="border-b-2 border-transparent pb-1 text-ink/60 transition hover:text-ink">Tarifs</a>
      <a href="#" class="border-b-2 border-transparent pb-1 text-ink/60 transition hover:text-ink">Blog</a>
    </nav>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-white">
      <div className="mx-auto flex h-16 max-w-4xl items-center gap-10 px-6">
        <a href="/" className="font-display text-lg font-bold text-ink">Mon site</a>
        <nav className="hidden items-center gap-8 text-sm sm:flex">
          <a href="#" className="border-b-2 border-brand pb-1 font-medium text-ink">Accueil</a>
          <a href="#" className="border-b-2 border-transparent pb-1 text-ink/60 transition hover:text-ink">Produit</a>
          <a href="#" className="border-b-2 border-transparent pb-1 text-ink/60 transition hover:text-ink">Tarifs</a>
          <a href="#" className="border-b-2 border-transparent pb-1 text-ink/60 transition hover:text-ink">Blog</a>
        </nav>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-bordure',
    name: 'Bordure haute',
    description: 'Fin liseré d’accent en haut, typo affirmée.',
    previewHtml: `
<header class="border-t-4 border-brand bg-white shadow-sm">
  <div class="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
    <a href="#" class="font-display text-xl font-bold text-ink">Mon site</a>
    <nav class="ml-auto hidden items-center gap-7 text-sm font-medium text-ink/70 sm:flex">
      <a href="#" class="hover:text-ink">Accueil</a>
      <a href="#" class="hover:text-ink">Services</a>
      <a href="#" class="hover:text-ink">Équipe</a>
      <a href="#" class="hover:text-ink">Contact</a>
    </nav>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="border-t-4 border-brand bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
        <a href="/" className="font-display text-xl font-bold text-ink">Mon site</a>
        <nav className="ml-auto hidden items-center gap-7 text-sm font-medium text-ink/70 sm:flex">
          <a href="#" className="hover:text-ink">Accueil</a>
          <a href="#" className="hover:text-ink">Services</a>
          <a href="#" className="hover:text-ink">Équipe</a>
          <a href="#" className="hover:text-ink">Contact</a>
        </nav>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-accent',
    name: 'Bandeau coloré',
    description: 'Fond entièrement à la couleur d’accent, bouton inversé.',
    previewHtml: `
<header class="bg-brand text-white">
  <div class="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
    <a href="#" class="font-display text-lg font-bold">Mon site</a>
    <nav class="ml-auto hidden items-center gap-7 text-sm text-white/80 sm:flex">
      <a href="#" class="hover:text-white">Accueil</a>
      <a href="#" class="hover:text-white">Produit</a>
      <a href="#" class="hover:text-white">Tarifs</a>
    </nav>
    <a href="#" class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand transition hover:bg-white/90">Commencer</a>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="bg-brand text-white">
      <div className="mx-auto flex h-16 max-w-4xl items-center gap-8 px-6">
        <a href="/" className="font-display text-lg font-bold">Mon site</a>
        <nav className="ml-auto hidden items-center gap-7 text-sm text-white/80 sm:flex">
          <a href="#" className="hover:text-white">Accueil</a>
          <a href="#" className="hover:text-white">Produit</a>
          <a href="#" className="hover:text-white">Tarifs</a>
        </nav>
        <a href="#" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand transition hover:bg-white/90">
          Commencer
        </a>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-double',
    name: 'Double étage',
    description: 'Fine barre utilitaire au-dessus de la navigation principale.',
    previewHtml: `
<header class="bg-white">
  <div class="border-b border-ink/10 bg-ink/[0.03]">
    <div class="mx-auto flex h-9 max-w-4xl items-center justify-end gap-5 px-6 text-xs text-ink/50">
      <a href="#" class="hover:text-ink">Aide</a>
      <a href="#" class="hover:text-ink">FR</a>
      <a href="#" class="font-medium text-brand">Connexion</a>
    </div>
  </div>
  <div class="border-b border-ink/10">
    <div class="mx-auto flex h-14 max-w-4xl items-center gap-8 px-6">
      <a href="#" class="font-display text-lg font-bold text-ink">Mon site</a>
      <nav class="ml-auto hidden items-center gap-7 text-sm text-ink/70 sm:flex">
        <a href="#" class="hover:text-ink">Produit</a>
        <a href="#" class="hover:text-ink">Solutions</a>
        <a href="#" class="hover:text-ink">Tarifs</a>
        <a href="#" class="hover:text-ink">Contact</a>
      </nav>
    </div>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="border-b border-ink/10 bg-ink/[0.03]">
        <div className="mx-auto flex h-9 max-w-4xl items-center justify-end gap-5 px-6 text-xs text-ink/50">
          <a href="#" className="hover:text-ink">Aide</a>
          <a href="#" className="hover:text-ink">FR</a>
          <a href="#" className="font-medium text-brand">Connexion</a>
        </div>
      </div>
      <div className="border-b border-ink/10">
        <div className="mx-auto flex h-14 max-w-4xl items-center gap-8 px-6">
          <a href="/" className="font-display text-lg font-bold text-ink">Mon site</a>
          <nav className="ml-auto hidden items-center gap-7 text-sm text-ink/70 sm:flex">
            <a href="#" className="hover:text-ink">Produit</a>
            <a href="#" className="hover:text-ink">Solutions</a>
            <a href="#" className="hover:text-ink">Tarifs</a>
            <a href="#" className="hover:text-ink">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-majuscules',
    name: 'Éditoriale',
    description: 'Grand logo, liens en capitales espacées, bouton contour.',
    previewHtml: `
<header class="border-b border-ink/10 bg-white">
  <div class="mx-auto flex h-20 max-w-4xl items-center gap-8 px-6">
    <a href="#" class="font-display text-2xl font-bold tracking-tight text-ink">Mon site</a>
    <nav class="ml-auto hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-ink/60 sm:flex">
      <a href="#" class="hover:text-ink">Accueil</a>
      <a href="#" class="hover:text-ink">Œuvres</a>
      <a href="#" class="hover:text-ink">Studio</a>
      <a href="#" class="hover:text-ink">Journal</a>
    </nav>
    <a href="#" class="rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white">Devis</a>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-white">
      <div className="mx-auto flex h-20 max-w-4xl items-center gap-8 px-6">
        <a href="/" className="font-display text-2xl font-bold tracking-tight text-ink">Mon site</a>
        <nav className="ml-auto hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-ink/60 sm:flex">
          <a href="#" className="hover:text-ink">Accueil</a>
          <a href="#" className="hover:text-ink">Œuvres</a>
          <a href="#" className="hover:text-ink">Studio</a>
          <a href="#" className="hover:text-ink">Journal</a>
        </nav>
        <a href="#" className="rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white">
          Devis
        </a>
      </div>
    </header>
  );
}
`,
  },

  {
    id: 'navbar-maison',
    name: 'Maison / Luxe',
    description: 'Givrée et minimale — logo en capitales espacées, navigation centrée, sélecteur FR/EN et lien boutique. Inspirée du luxe éditorial.',
    previewHtml: `
<header class="border-b border-ink/10 bg-[#f5f2ec]/85 backdrop-blur">
  <div class="relative mx-auto flex h-[68px] max-w-5xl items-center px-6">
    <a href="#" class="flex-1 font-serif text-base uppercase tracking-[0.32em] text-ink">Maison</a>
    <nav class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-ink/55 lg:flex">
      <a href="#" class="transition hover:text-ink">Notre Maison</a>
      <a href="#" class="transition hover:text-ink">Collection</a>
      <a href="#" class="transition hover:text-ink">Contact</a>
    </nav>
    <div class="flex flex-1 items-center justify-end gap-5">
      <div class="hidden items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] sm:flex">
        <span class="text-ink">FR</span>
        <span class="block h-3 w-px bg-ink/20"></span>
        <span class="text-ink/40">EN</span>
      </div>
      <a href="#" class="text-[11px] uppercase tracking-[0.22em] text-brand transition hover:opacity-70">Boutique</a>
    </div>
  </div>
</header>`.trim(),
    tsx: `export default function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-[#f5f2ec]/85 backdrop-blur">
      <div className="relative mx-auto flex h-[68px] max-w-5xl items-center px-6">
        <a href="/" className="flex-1 font-serif text-base uppercase tracking-[0.32em] text-ink">Maison</a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-ink/55 lg:flex">
          <a href="#" className="transition hover:text-ink">Notre Maison</a>
          <a href="#" className="transition hover:text-ink">Collection</a>
          <a href="#" className="transition hover:text-ink">Contact</a>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-5">
          <div className="hidden items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] sm:flex">
            <span className="text-ink">FR</span>
            <span className="block h-3 w-px bg-ink/20" />
            <span className="text-ink/40">EN</span>
          </div>
          <a href="#" className="text-[11px] uppercase tracking-[0.22em] text-brand transition hover:opacity-70">
            Boutique
          </a>
        </div>
      </div>
    </header>
  );
}
`,
  },
];
