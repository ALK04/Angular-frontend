/**
 * Vérifie que le `tsx` de chaque variante du catalogue est du code valide.
 *
 * Pourquoi : les `tsx` sont des chaînes de caractères. Une erreur dedans ne se
 * voit ni à la compilation d'Angular, ni dans l'aperçu (qui rend `previewHtml`,
 * pas le React) — elle n'apparaît que chez le dev, après téléchargement.
 * Piège classique : une apostrophe française dans une chaîne délimitée par des
 * apostrophes droites, qui ferme la chaîne trop tôt.
 *
 * Usage : npm run check:variants
 *
 * Ce contrôle est syntaxique. Pour une vérification de fond (types, imports
 * manquants, variables inutilisées), générer un projet et lancer son `npm run
 * build` — voir la section « Le générateur » du CLAUDE.md.
 */
import { createRequire } from 'node:module';
import { build, transformSync } from 'esbuild';

const ENTRY = 'src/app/features/composer/data/variant-registry.ts';

const bundle = await build({
  entryPoints: [ENTRY],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false,
  logLevel: 'silent',
});

const module = { exports: {} };
new Function('module', 'exports', 'require', bundle.outputFiles[0].text)(
  module,
  module.exports,
  createRequire(import.meta.url),
);

const { VARIANTS_BY_TYPE } = module.exports;

let broken = 0;
let total = 0;

for (const [type, variants] of Object.entries(VARIANTS_BY_TYPE)) {
  for (const variant of variants) {
    total++;
    try {
      transformSync(variant.tsx, { loader: 'tsx', format: 'esm' });
    } catch (error) {
      broken++;
      const detail = error.errors?.[0];
      console.error(`\n✗ ${type} / ${variant.id}`);
      console.error(`  ${detail?.text ?? String(error)}`);
      if (detail?.location) {
        console.error(`  ligne ${detail.location.line} : ${detail.location.lineText.trim().slice(0, 160)}`);
      }
    }
  }
}

if (broken > 0) {
  console.error(`\n${broken} variante(s) invalide(s) sur ${total}.`);
  process.exit(1);
}

console.log(`${total} variantes valides.`);
