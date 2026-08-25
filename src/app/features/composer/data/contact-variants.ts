import { BrickVariant } from '../../../models/brick-variant.model';

export const CONTACT_VARIANTS: BrickVariant[] = [
  {
    id: 'contact-centre',
    name: 'Formulaire centré',
    description: 'Carte blanche centrée sur fond gris, 3 champs et bouton pleine largeur.',
    previewHtml: `
<section class="bg-[#eef0f5] px-8 py-10">
  <div class="mx-auto max-w-xl">
    <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Contact</p>
    <h2 class="mb-8 font-display text-3xl font-bold tracking-tight text-ink">Parlons de votre projet</h2>
    <div class="rounded-2xl bg-white p-7 shadow-sm">
      <div class="mb-4 grid grid-cols-2 gap-4">
        <div>
          <p class="mb-1.5 text-xs font-medium text-ink/40">Prénom</p>
          <div class="flex h-10 items-center rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink/50">Martin</div>
        </div>
        <div>
          <p class="mb-1.5 text-xs font-medium text-ink/40">Nom</p>
          <div class="flex h-10 items-center rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink/50">Dupont</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="mb-1.5 text-xs font-medium text-ink/40">E-mail</p>
        <div class="flex h-10 items-center rounded-xl border border-brand/40 px-3.5 text-sm text-ink ring-2 ring-brand/10">martin@startup.fr</div>
      </div>
      <div class="mb-6">
        <p class="mb-1.5 text-xs font-medium text-ink/40">Message</p>
        <div class="h-24 rounded-xl border border-ink/[0.1] px-3.5 py-3 text-sm text-ink/35">Bonjour, je souhaite discuter d'un projet…</div>
      </div>
      <button class="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white">Envoyer le message →</button>
    </div>
  </div>
</section>`.trim(),
    tsx: `export default function Contact() {
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', message: '' });

  return (
    <section className="bg-[#eef0f5] px-8 py-10">
      <div className="mx-auto max-w-xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Contact</p>
        <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-ink">Parlons de votre projet</h2>
        <div className="rounded-2xl bg-white p-7 shadow-sm">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink/40">Prénom</label>
              <input className="h-10 w-full rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/10" value={form.prenom} onChange={e => setForm({...form, prenom: e.target.value})} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink/40">Nom</label>
              <input className="h-10 w-full rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/10" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} />
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium text-ink/40">E-mail</label>
            <input type="email" className="h-10 w-full rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/10" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div className="mb-6">
            <label className="mb-1.5 block text-xs font-medium text-ink/40">Message</label>
            <textarea rows={4} className="w-full rounded-xl border border-ink/[0.1] px-3.5 py-3 text-sm text-ink outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand/10 resize-none" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
          </div>
          <button type="submit" className="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white transition hover:opacity-90">Envoyer le message →</button>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'contact-infos',
    name: 'Formulaire + Infos',
    description: 'Formulaire à gauche, coordonnées avec icônes à droite sur fond blanc.',
    previewHtml: `
<section class="bg-white px-8 py-10">
  <div class="mx-auto flex max-w-5xl gap-14">
    <div class="min-w-0 flex-1">
      <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Contact</p>
      <h2 class="mb-8 font-display text-3xl font-bold tracking-tight text-ink">Parlons de votre projet</h2>
      <div class="mb-4 grid grid-cols-2 gap-4">
        <div>
          <p class="mb-1.5 text-xs font-medium text-ink/40">Prénom</p>
          <div class="flex h-10 items-center rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink/50">Martin</div>
        </div>
        <div>
          <p class="mb-1.5 text-xs font-medium text-ink/40">Nom</p>
          <div class="flex h-10 items-center rounded-xl border border-ink/[0.1] px-3.5 text-sm text-ink/50">Dupont</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="mb-1.5 text-xs font-medium text-ink/40">E-mail</p>
        <div class="flex h-10 items-center rounded-xl border border-brand/40 px-3.5 text-sm text-ink ring-2 ring-brand/10">martin@startup.fr</div>
      </div>
      <div class="mb-6">
        <p class="mb-1.5 text-xs font-medium text-ink/40">Message</p>
        <div class="h-24 rounded-xl border border-ink/[0.1] px-3.5 py-3 text-sm text-ink/35">Bonjour, je souhaite discuter d'un projet…</div>
      </div>
      <button class="rounded-xl bg-brand px-8 py-3 text-sm font-bold text-white">Envoyer →</button>
    </div>
    <div class="w-52 flex-shrink-0 pt-[106px]">
      <div class="space-y-6">
        <div class="flex gap-3">
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" class="text-brand" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="16" height="12" rx="2"/><polyline points="2,4 10,11 18,4"/></svg>
          </div>
          <div><p class="text-xs text-ink/35">E-mail</p><p class="text-sm font-semibold text-ink">contact@calque.dev</p></div>
        </div>
        <div class="flex gap-3">
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" class="text-brand" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2C7.2 2 5 4.2 5 7c0 4.4 5 11 5 11s5-6.6 5-11c0-2.8-2.2-5-5-5z"/><circle cx="10" cy="7" r="2"/></svg>
          </div>
          <div><p class="text-xs text-ink/35">Localisation</p><p class="text-sm font-semibold text-ink">Paris, France</p></div>
        </div>
        <div class="flex gap-3">
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" class="text-brand" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="8"/><polyline points="10,5 10,10 13,13"/></svg>
          </div>
          <div><p class="text-xs text-ink/35">Disponibilité</p><p class="text-sm font-semibold text-ink">Réponse sous 24 h</p></div>
        </div>
      </div>
    </div>
  </div>
</section>`.trim(),
    tsx: `const infos = [
  { icon: 'email',    label: 'E-mail',        value: 'contact@calque.dev' },
  { icon: 'location', label: 'Localisation',  value: 'Paris, France' },
  { icon: 'clock',    label: 'Disponibilité', value: 'Réponse sous 24 h' },
];

export default function Contact() {
  return (
    <section className="bg-white px-8 py-10">
      <div className="mx-auto flex max-w-5xl gap-14">
        <div className="min-w-0 flex-1">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Contact</p>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-ink">Parlons de votre projet</h2>
          {/* champs identiques au variant centré */}
          <button type="submit" className="rounded-xl bg-brand px-8 py-3 text-sm font-bold text-white transition hover:opacity-90">Envoyer →</button>
        </div>
        <div className="w-52 flex-shrink-0 pt-[106px]">
          <div className="space-y-6">
            {infos.map(info => (
              <div key={info.icon} className="flex gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  {/* icône */}
                </div>
                <div>
                  <p className="text-xs text-ink/35">{info.label}</p>
                  <p className="text-sm font-semibold text-ink">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    id: 'contact-sombre',
    name: 'Sombre',
    description: 'Formulaire sur fond noir, champs translucides, bouton accent. Adapté aux dark sites.',
    previewHtml: `
<section class="bg-[#0f0d1a] px-8 py-10">
  <div class="mx-auto max-w-xl">
    <p class="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Contact</p>
    <h2 class="mb-2 font-display text-3xl font-bold text-white">Parlons de votre projet</h2>
    <p class="mb-8 text-sm text-white/35">On répond en moins de 24 heures.</p>
    <div class="mb-4 grid grid-cols-2 gap-4">
      <div>
        <p class="mb-1.5 text-xs font-medium text-white/30">Prénom</p>
        <div class="flex h-10 items-center rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm text-white/40">Martin</div>
      </div>
      <div>
        <p class="mb-1.5 text-xs font-medium text-white/30">Nom</p>
        <div class="flex h-10 items-center rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm text-white/40">Dupont</div>
      </div>
    </div>
    <div class="mb-4">
      <p class="mb-1.5 text-xs font-medium text-white/30">E-mail</p>
      <div class="flex h-10 items-center rounded-xl border border-brand/50 bg-white/[0.04] px-3.5 text-sm text-white/65 ring-2 ring-brand/15">martin@startup.fr</div>
    </div>
    <div class="mb-6">
      <p class="mb-1.5 text-xs font-medium text-white/30">Message</p>
      <div class="h-24 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white/25">Bonjour, je souhaite discuter d'un projet…</div>
    </div>
    <button class="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white">Envoyer le message →</button>
  </div>
</section>`.trim(),
    tsx: `export default function Contact() {
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', message: '' });
  const inputCls = 'h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm text-white/70 outline-none placeholder:text-white/25 focus:border-brand/50 focus:ring-2 focus:ring-brand/15';

  return (
    <section className="bg-[#0f0d1a] px-8 py-10">
      <div className="mx-auto max-w-xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">Contact</p>
        <h2 className="mb-2 font-display text-3xl font-bold text-white">Parlons de votre projet</h2>
        <p className="mb-8 text-sm text-white/35">On répond en moins de 24 heures.</p>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/30">Prénom</label>
            <input className={inputCls} value={form.prenom} onChange={e => setForm({...form, prenom: e.target.value})} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/30">Nom</label>
            <input className={inputCls} value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-medium text-white/30">E-mail</label>
          <input type="email" className={inputCls} value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        </div>
        <div className="mb-6">
          <label className="mb-1.5 block text-xs font-medium text-white/30">Message</label>
          <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-white/70 outline-none placeholder:text-white/25 focus:border-brand/50 focus:ring-2 focus:ring-brand/15 resize-none" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
        </div>
        <button type="submit" className="w-full rounded-xl bg-brand py-3 text-sm font-bold text-white transition hover:opacity-90">Envoyer le message →</button>
      </div>
    </section>
  );
}
`,
  },
];
