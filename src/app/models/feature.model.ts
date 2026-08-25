/** Une fonctionnalité présentée dans la grille de la page d'accueil. */
export interface Feature {
  /** Étiquette courte en majuscules (ex. « BLOCS »). */
  label: string;
  /** Titre de la fonctionnalité. */
  title: string;
  /** Description en une phrase, côté utilisateur. */
  description: string;
}
