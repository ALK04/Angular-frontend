import { BrickVariant } from '../../../models/brick-variant.model';

export const TEAM_VARIANTS: BrickVariant[] = [
  {
    id: 'team-grille',
    name: 'Grille de l’équipe',
    description: '4 cartes centrées — avatar initiales, nom, rôle et icônes réseaux sociaux, sur fond gris doux.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 text-center">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">L'équipe</p>
      <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Les visages derrière le produit</h2>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <div class="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand/25 to-brand/5">
          <span class="font-display text-xl font-bold text-brand">MJ</span>
        </div>
        <h3 class="font-display text-sm font-bold text-ink">Marie Jourdain</h3>
        <p class="mt-1 font-mono text-xs text-ink/40">Co-fondatrice & CEO</p>
        <div class="mt-4 flex gap-2">
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-ink/10 to-ink/5">
          <span class="font-display text-xl font-bold text-ink/50">TM</span>
        </div>
        <h3 class="font-display text-sm font-bold text-ink">Thomas Méran</h3>
        <p class="mt-1 font-mono text-xs text-ink/40">Lead Développeur</p>
        <div class="mt-4 flex gap-2">
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-ink/10 to-ink/5">
          <span class="font-display text-xl font-bold text-ink/50">LF</span>
        </div>
        <h3 class="font-display text-sm font-bold text-ink">Léa Fontaine</h3>
        <p class="mt-1 font-mono text-xs text-ink/40">Directrice Design</p>
        <div class="mt-4 flex gap-2">
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
        <div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-ink/10 to-ink/5">
          <span class="font-display text-xl font-bold text-ink/50">KB</span>
        </div>
        <h3 class="font-display text-sm font-bold text-ink">Karim Bensalem</h3>
        <p class="mt-1 font-mono text-xs text-ink/40">Growth & Marketing</p>
        <div class="mt-4 flex gap-2">
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const members = [
  { initials: 'MJ', name: 'Marie Jourdain',  role: 'Co-fondatrice & CEO',   accent: true },
  { initials: 'TM', name: 'Thomas Méran',    role: 'Lead Développeur',       accent: false },
  { initials: 'LF', name: 'Léa Fontaine',    role: 'Directrice Design',      accent: false },
  { initials: 'KB', name: 'Karim Bensalem',  role: 'Growth & Marketing',     accent: false },
];

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Team() {
  return (
    <section className="bg-[#eef0f5] px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">L'équipe</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Les visages derrière le produit</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {members.map(m => (
            <div key={m.name} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className={\`mb-4 flex h-20 w-20 items-center justify-center rounded-full \${m.accent ? 'bg-gradient-to-br from-brand/25 to-brand/5' : 'bg-gradient-to-br from-ink/10 to-ink/5'}\`}>
                <span className={\`font-display text-xl font-bold \${m.accent ? 'text-brand' : 'text-ink/50'}\`}>{m.initials}</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink">{m.name}</h3>
              <p className="mt-1 font-mono text-xs text-ink/40">{m.role}</p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
                  <LinkedInIcon />
                </a>
                <a href="#" className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/30 transition-colors hover:bg-brand/10 hover:text-brand">
                  <XIcon />
                </a>
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
    id: 'team-spotlight',
    name: 'Spotlight membres',
    description: '3 cartes horizontales avec avatar carré, bio courte et liens — plus d’espace, plus d’humain.',
    previewHtml: `
<section class="bg-white px-8 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 flex items-end justify-between">
      <div>
        <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Équipe fondatrice</p>
        <h2 class="font-display text-3xl font-bold tracking-tight text-ink">Qui sommes-nous</h2>
      </div>
      <span class="font-mono text-sm text-ink/30">3 personnes · Paris, France</span>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="flex flex-col rounded-2xl border border-ink/[0.07] p-6 shadow-sm">
        <div class="mb-5 flex items-center gap-4">
          <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand/5">
            <span class="font-display text-lg font-bold text-brand">MJ</span>
          </div>
          <div>
            <h3 class="font-display text-base font-bold text-ink">Marie Jourdain</h3>
            <p class="font-mono text-xs text-brand">CEO & Co-fondatrice</p>
          </div>
        </div>
        <p class="flex-1 text-sm leading-relaxed text-ink/50">Ex-ingénieure chez Doctolib. Passionnée par les outils qui rendent les devs plus rapides. 8 ans d'expérience en product.</p>
        <div class="mt-5 flex gap-2 border-t border-ink/[0.06] pt-4">
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col rounded-2xl border border-brand/25 bg-brand/[0.03] p-6 shadow-sm">
        <div class="mb-5 flex items-center gap-4">
          <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand/5">
            <span class="font-display text-lg font-bold text-brand">TM</span>
          </div>
          <div>
            <h3 class="font-display text-base font-bold text-ink">Thomas Méran</h3>
            <p class="font-mono text-xs text-brand">CTO & Co-fondateur</p>
          </div>
        </div>
        <p class="flex-1 text-sm leading-relaxed text-ink/50">Ancien lead dev chez Alan. Architecte du moteur de scaffolding. Amoureux des DX soignées et du code bien factorisé.</p>
        <div class="mt-5 flex gap-2 border-t border-brand/10 pt-4">
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col rounded-2xl border border-ink/[0.07] p-6 shadow-sm">
        <div class="mb-5 flex items-center gap-4">
          <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-ink/12 to-ink/5">
            <span class="font-display text-lg font-bold text-ink/45">LF</span>
          </div>
          <div>
            <h3 class="font-display text-base font-bold text-ink">Léa Fontaine</h3>
            <p class="font-mono text-xs text-ink/40">Directrice Design</p>
          </div>
        </div>
        <p class="flex-1 text-sm leading-relaxed text-ink/50">Passée par Figma et Notion (Londres). Design systems, typographie et interfaces qui disparaissent pour laisser parler le contenu.</p>
        <div class="mt-5 flex gap-2 border-t border-ink/[0.06] pt-4">
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const members = [
  { initials: 'MJ', name: 'Marie Jourdain', role: 'CEO & Co-fondatrice',  bio: 'Ex-ingénieure chez Doctolib. Passionnée par les outils qui rendent les devs plus rapides. 8 ans d’expérience en product.', highlight: false },
  { initials: 'TM', name: 'Thomas Méran',   role: 'CTO & Co-fondateur',   bio: 'Ancien lead dev chez Alan. Architecte du moteur de scaffolding. Amoureux des DX soignées et du code bien factorisé.', highlight: true },
  { initials: 'LF', name: 'Léa Fontaine',   role: 'Directrice Design',    bio: 'Passée par Figma et Notion (Londres). Design systems, typographie et interfaces qui disparaissent pour laisser parler le contenu.', highlight: false },
];

export default function Team() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Équipe fondatrice</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Qui sommes-nous</h2>
          </div>
          <span className="font-mono text-sm text-ink/30">3 personnes · Paris, France</span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {members.map(m => (
            <div key={m.name} className={\`flex flex-col rounded-2xl border p-6 shadow-sm \${m.highlight ? 'border-brand/25 bg-brand/[0.03]' : 'border-ink/[0.07]'}\`}>
              <div className="mb-5 flex items-center gap-4">
                <div className={\`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br \${m.highlight ? 'from-brand/30 to-brand/5' : 'from-ink/12 to-ink/5'}\`}>
                  <span className={\`font-display text-lg font-bold \${m.highlight ? 'text-brand' : 'text-ink/45'}\`}>{m.initials}</span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{m.name}</h3>
                  <p className={\`font-mono text-xs \${m.highlight ? 'text-brand' : 'text-ink/40'}\`}>{m.role}</p>
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-ink/50">{m.bio}</p>
              <div className={\`mt-5 flex gap-2 border-t pt-4 \${m.highlight ? 'border-brand/10' : 'border-ink/[0.06]'}\`}>
                <a href="#" className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
                  {/* LinkedIn */}
                </a>
                <a href="#" className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/[0.05] text-ink/35 transition-colors hover:bg-brand/10 hover:text-brand">
                  {/* X/Twitter */}
                </a>
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
    id: 'team-portrait',
    name: 'Portrait / Bio',
    description: 'Portrait pleine hauteur + carte biographie (nom, rôle serif, récit et parcours daté en mono). Pour présenter un fondateur ou artisan avec élégance.',
    previewHtml: `
<section class="bg-[#f5f2ec] px-8 py-20">
  <div class="mx-auto max-w-5xl">
    <div class="grid items-stretch gap-6 lg:grid-cols-2">
      <div class="relative overflow-hidden" style="aspect-ratio:3/4;background:rgba(200,197,191,0.45)">
        <div class="absolute inset-0 flex items-end p-6">
          <span class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">Portrait — 600 × 800</span>
        </div>
      </div>
      <div class="flex flex-col justify-center border border-ink/10 bg-white/60 p-10 backdrop-blur lg:p-14">
        <p class="mb-7 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Quentin Richard</p>
        <h2 class="mb-7 font-serif text-4xl font-light leading-tight tracking-[0.06em] text-ink">Négociant-<br>Manipulant</h2>
        <div class="mb-9 h-px w-7 bg-brand"></div>
        <div class="space-y-5 font-serif text-[15px] font-light leading-relaxed text-ink/65">
          <p>Il grandit entre les rangs et apprend à lire la vigne bien avant de lire les étiquettes.</p>
          <p>En 2024, il fonde la maison : des raisins choisis, une vinification personnelle, un assemblage qui lui ressemble.</p>
        </div>
        <div class="mt-10 space-y-2 border-t border-ink/10 pt-8">
          <div class="flex items-baseline gap-5"><span class="shrink-0 font-mono text-[10px] tracking-wide text-ink/40">2019</span><span class="font-mono text-[10px] text-ink/65">Domaine familial</span></div>
          <div class="flex items-baseline gap-5"><span class="shrink-0 font-mono text-[10px] tracking-wide text-ink/40">2022</span><span class="font-mono text-[10px] text-ink/65">Premières vinifications</span></div>
          <div class="flex items-baseline gap-5"><span class="shrink-0 font-mono text-[10px] tracking-wide text-ink/40">2024–</span><span class="font-mono text-[10px] text-ink/65">Fondation de la Maison</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const parcours = [
  { date: '2019',  role: 'Domaine familial' },
  { date: '2022',  role: 'Premières vinifications' },
  { date: '2024–', role: 'Fondation de la Maison' },
];

export default function Portrait() {
  return (
    <section className="bg-[#f5f2ec] px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden bg-[#c8c5bf]/70" style={{ aspectRatio: '3 / 4' }}>
            {/* Remplacez par votre portrait : <img src="..." alt="Quentin Richard" className="absolute inset-0 h-full w-full object-cover" /> */}
            <div className="absolute inset-0 flex items-end p-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">Portrait — 600 × 800</span>
            </div>
          </div>
          <div className="flex flex-col justify-center border border-ink/10 bg-white/60 p-10 backdrop-blur lg:p-14">
            <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Quentin Richard</p>
            <h2 className="mb-7 font-serif text-4xl font-light leading-tight tracking-[0.06em] text-ink">
              Négociant-<br />Manipulant
            </h2>
            <div className="mb-9 h-px w-7 bg-brand" />
            <div className="space-y-5 font-serif text-[15px] font-light leading-relaxed text-ink/65">
              <p>Il grandit entre les rangs et apprend à lire la vigne bien avant de lire les étiquettes.</p>
              <p>En 2024, il fonde la maison : des raisins choisis, une vinification personnelle, un assemblage qui lui ressemble.</p>
            </div>
            <div className="mt-10 space-y-2 border-t border-ink/10 pt-8">
              {parcours.map((p) => (
                <div key={p.date} className="flex items-baseline gap-5">
                  <span className="shrink-0 font-mono text-[10px] tracking-wide text-ink/40">{p.date}</span>
                  <span className="font-mono text-[10px] text-ink/65">{p.role}</span>
                </div>
              ))}
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
