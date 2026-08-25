/**
 * Règles de nommage du projet généré.
 *
 * Tout ce que l'utilisateur saisit (nom de page, nom de projet) ou choisit
 * (id de variante) passe par ici avant de devenir un nom de fichier, un nom de
 * composant React ou un segment d'URL. Objectif : ne jamais produire un projet
 * qui ne compile pas à cause d'un accent, d'un espace ou d'un doublon.
 */

/** `'Vidéo / Démo'` → `'video-demo'`. Chaîne vide si rien d'exploitable. */
export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // retire les accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** `'hero-centre'` → `'HeroCentre'`. Chaîne vide si rien d'exploitable. */
export function pascalCase(input: string): string {
  const name = slugify(input)
    .split('-')
    .filter(Boolean)
    .map(part => part[0].toUpperCase() + part.slice(1))
    .join('');
  // Un identifiant JS ne peut pas commencer par un chiffre.
  return /^[0-9]/.test(name) ? `N${name}` : name;
}

/**
 * Garantit l'unicité d'un nom dans un ensemble donné en suffixant `2`, `3`…
 * Le nom retenu est ajouté à `used`.
 */
export function uniqueName(base: string, used: Set<string>): string {
  let name = base;
  let n = 2;
  while (used.has(name)) name = `${base}${n++}`;
  used.add(name);
  return name;
}

/**
 * Nettoie une chaîne destinée à être insérée telle quelle dans du JSX.
 * Les caractères `< > { }` y ouvriraient une balise ou une expression.
 */
export function jsxSafeText(input: string): string {
  return input.replace(/[<>{}]/g, '').trim();
}
