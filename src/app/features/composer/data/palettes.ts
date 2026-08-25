export interface ColorPalette {
  id: string;
  apiId?: string;   // UUID Supabase — présent uniquement pour les palettes personnalisées
  name: string;
  description: string;
  brand: { default: string; dark: string };
  surface: string;  // remplace bg-white dans les sections (via Tailwind extend)
  pageBg: string;   // fond de la body (entre les sections)
  ink: string;      // couleur du texte principal
}

export const PALETTE_PRESETS: ColorPalette[] = [
  {
    id: 'calque',
    name: 'Calque',
    description: 'Violet électrique · fond froid · encre profonde',
    brand: { default: '#5b3df5', dark: '#3a1fd0' },
    surface: '#ffffff',
    pageBg: '#eef0f5',
    ink: '#14121f',
  },
  {
    id: 'sable',
    name: 'Sable',
    description: 'Ambre chaleureux · crème dorée · terre brûlée',
    brand: { default: '#d97706', dark: '#b45309' },
    surface: '#fffbeb',
    pageBg: '#fef3c7',
    ink: '#1c1407',
  },
  {
    id: 'ocean',
    name: 'Océan',
    description: 'Bleu ciel vif · blanc glacé · nuit marine',
    brand: { default: '#0284c7', dark: '#0369a1' },
    surface: '#f0f9ff',
    pageBg: '#e0f2fe',
    ink: '#082f49',
  },
  {
    id: 'menthe',
    name: 'Menthe',
    description: 'Vert émeraude · blanc végétal · forêt sombre',
    brand: { default: '#059669', dark: '#047857' },
    surface: '#f0fdf4',
    pageBg: '#dcfce7',
    ink: '#052e16',
  },
  {
    id: 'cerise',
    name: 'Cerise',
    description: 'Rose vif · blanc poudré · grenat profond',
    brand: { default: '#e11d48', dark: '#be123c' },
    surface: '#fff1f2',
    pageBg: '#ffe4e6',
    ink: '#3d0015',
  },
  {
    id: 'ardoise',
    name: 'Ardoise',
    description: 'Gris bleuté · blanc minéral · ardoise nuit',
    brand: { default: '#475569', dark: '#334155' },
    surface: '#f8fafc',
    pageBg: '#e2e8f0',
    ink: '#0f172a',
  },
];
