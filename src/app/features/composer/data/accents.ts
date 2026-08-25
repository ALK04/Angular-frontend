/**
 * Couleurs d'accent proposées par le bouton « Couleur ».
 * La valeur choisie est injectée dans le thème Tailwind de chaque aperçu
 * (couleur `brand`), donc toutes les navbars se repeignent ensemble.
 * Toutes ces teintes restent lisibles avec du texte blanc.
 */
export interface AccentPreset {
  id: string;
  name: string;
  default: string;
  dark: string;
}

export const ACCENT_PRESETS: AccentPreset[] = [
  { id: 'violet', name: 'Violet', default: '#5b3df5', dark: '#3a1fd0' },
  { id: 'bleu', name: 'Bleu', default: '#2563eb', dark: '#1d4ed8' },
  { id: 'emeraude', name: 'Émeraude', default: '#059669', dark: '#047857' },
  { id: 'rose', name: 'Rose', default: '#e11d48', dark: '#be123c' },
];
