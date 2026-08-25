/**
 * Une « brique » du catalogue Calque (navbar, hero, footer…).
 * Chaque variante porte deux représentations :
 *  - `previewHtml` : markup HTML + Tailwind rendu dans l'aperçu (iframe).
 *  - `tsx`         : le vrai composant React écrit dans le projet généré.
 * Pour le MVP les deux sont maintenus à la main (peu de briques, tout sous contrôle).
 */
export interface BrickVariant {
  id: string;
  name: string;
  description: string;
  previewHtml: string;
  tsx: string;
}
