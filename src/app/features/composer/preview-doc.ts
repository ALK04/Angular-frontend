import { AccentPreset } from './data/accents';
import { ColorPalette } from './data/palettes';

export interface PreviewNavLink {
  label: string;
  href: string;
}

/**
 * Construit le document HTML complet injecté dans les iframes d'aperçu
 * (configurateur ET aperçu de la page de présentation).
 *
 * Le CDN Tailwind sert UNIQUEMENT à l'aperçu : le projet généré, lui, embarque
 * un vrai Tailwind compilé. Le thème (`brand`, `ink`, `white`) est piloté par
 * l'accent et la palette choisis, donc toutes les briques se repeignent d'un coup.
 *
 * Le script de fin de body réécrit les liens des `<nav>` pour qu'ils reflètent
 * les pages réellement configurées.
 */
export function buildPreviewDoc(
  body: string,
  accent: AccentPreset,
  palette: ColorPalette,
  navLinks: PreviewNavLink[] = [],
): string {
    const navData = JSON.stringify(navLinks);
    return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: { DEFAULT: '${accent.default}', dark: '${accent.dark}' },
            ink:   '${palette.ink}',
            white: '${palette.surface}',
          },
          fontFamily: {
            display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
    };
  </script>
  <style>
    body { margin: 0; font-family: Inter, system-ui, sans-serif; background: ${palette.pageBg}; }
  </style>
</head>
<body>${body}
<script>
  (function () {
    var links = ${navData};
    function applyNavLinks() {
      var navs = Array.from(document.querySelectorAll('nav'));
      if (!navs.length) return;
      // Récupère, dans l'ordre du document, chaque ancre directe des <nav> : ce sont les emplacements de liens.
      var slots = [];
      navs.forEach(function (nav) {
        Array.from(nav.querySelectorAll(':scope > a')).forEach(function (a) { slots.push(a); });
      });
      if (!slots.length) return;
      var template = slots[slots.length - 1]; // dernière ancre = modèle de style pour les liens ajoutés
      // Met à jour les emplacements existants ou en crée de nouveaux à la suite.
      for (var i = 0; i < links.length; i++) {
        var target = slots[i];
        if (!target) {
          target = template.cloneNode(true);
          template.parentNode.appendChild(target);
          slots.push(target);
        }
        target.textContent = links[i].label;
        target.setAttribute('href', links[i].href);
      }
      // Retire les emplacements en trop (liens supprimés dans le configurateur).
      for (var j = links.length; j < slots.length; j++) {
        if (slots[j].parentNode) slots[j].parentNode.removeChild(slots[j]);
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyNavLinks);
    } else {
      applyNavLinks();
    }
  })();
</script>
</body>
</html>`;
}
