import type { ComposerPage, NavLink } from '../composer.store';
import type { ColorPalette } from '../data/palettes';
import { findVariant } from '../data/variant-registry';
import { anchorsForPage } from './anchors';
import { jsxSafeText, pascalCase, slugify, uniqueName } from './naming';
import { buildStaticFiles } from './static-files';

/**
 * Le moteur de génération.
 *
 * Entrée : les choix de l'utilisateur (pages, sections, navigation, palette).
 * Sortie : un objet « chemin de fichier → contenu ». Rien n'est écrit sur disque
 * et aucun dossier n'est créé explicitement : les dossiers naissent des « / »
 * dans les chemins au moment où le ZIP est assemblé (voir `zip.ts`).
 *
 * Règles structurantes du projet produit :
 *  - une variante choisie = un fichier composant, même si elle sert sur plusieurs pages ;
 *  - une page = un fichier dans `pages/`, qui importe et empile ses sections ;
 *  - les couleurs vivent dans `config/theme.ts`, lu à la fois par Tailwind et par React ;
 *  - la navigation vit dans `config/site.config.ts`, lue par `NavMain`.
 */

export interface ProjectInput {
  projectName: string;
  pages: ComposerPage[];
  navLinks: NavLink[];
  palette: ColorPalette;
}

export interface GeneratedProject {
  /** Nom du dossier racine à l'intérieur du ZIP. */
  rootDir: string;
  /** Chemin relatif → contenu du fichier. */
  files: Record<string, string>;
}

/** Noms déjà pris par le squelette : aucun composant généré ne doit les écraser. */
const RESERVED_NAMES = [
  'App',
  'MainLayout',
  'NavMain',
  'NavItem',
  'ScrollToHash',
  'Button',
  'NotFoundPage',
];

export function buildProject(input: ProjectInput): GeneratedProject {
  const projectName = jsxSafeText(input.projectName) || 'Mon site';
  const slug = slugify(projectName) || 'mon-site';

  const layoutPage = input.pages.find(page => page.isLayout);
  const contentPages = input.pages.filter(page => !page.isLayout);

  const files: Record<string, string> = buildStaticFiles({ projectName, slug });
  const usedComponentNames = new Set<string>(RESERVED_NAMES);

  // ── 1. Composants de section ────────────────────────────────────────────
  // Dédupliqués par variantId : la même brique posée sur deux pages n'écrit
  // qu'un seul fichier, importé deux fois.
  const sectionComponents = new Map<string, { name: string; importPath: string }>();

  const registerSection = (variantId: string, sectionType: string) => {
    const cached = sectionComponents.get(variantId);
    if (cached) return cached;

    const variant = findVariant(variantId);
    if (!variant) return null;

    const name = uniqueName(pascalCase(variantId) || 'Section', usedComponentNames);
    const dir = slugify(sectionType) || 'divers';
    files[`client/src/components/sections/${dir}/${name}.tsx`] = withReactImports(
      withSiteName(renameDefaultExport(variant.tsx, name), projectName),
    );

    const entry = { name, importPath: `../components/sections/${dir}/${name}` };
    sectionComponents.set(variantId, entry);
    return entry;
  };

  // ── 2. Pages ────────────────────────────────────────────────────────────
  const usedRoutes = new Set<string>();
  const pageInfos = contentPages.map((page, index) => {
    const base = pascalCase(page.name) || `Page${index + 1}`;
    const componentName = uniqueName(`${base}Page`, usedComponentNames);

    let route = index === 0 ? '/' : `/${slugify(page.name) || `page-${index + 1}`}`;
    while (usedRoutes.has(route)) route = `${route}-2`;
    usedRoutes.add(route);

    return { page, componentName, route };
  });

  // Les ancres sont calculées une fois pour toutes : les fichiers de pages les
  // posent en `id`, et site.config.ts s'en sert pour les liens de type « ancre ».
  const anchorsByPage = new Map<string, Map<string, string>>(
    contentPages.map(page => [page.id, anchorsForPage(page)]),
  );

  for (const info of pageInfos) {
    files[`client/src/pages/${info.componentName}.tsx`] = renderPageFile(
      info.page,
      info.componentName,
      anchorsByPage.get(info.page.id) ?? new Map(),
      registerSection,
    );
  }

  files['client/src/pages/NotFoundPage.tsx'] = renderNotFoundPage();

  // ── 3. Éléments de mise en page (navbar, footers) ────────────────────────
  const navbarSection = layoutPage?.sections.find(section => section.sectionType === 'navbar');
  const navbarVariant = navbarSection ? findVariant(navbarSection.variantId) : undefined;
  files['client/src/components/layout/NavMain.tsx'] = navbarVariant
    ? buildNavMain(navbarVariant.tsx, projectName)
    : renderDefaultNavMain();

  const footerImports: { name: string; importPath: string }[] = [];
  for (const section of layoutPage?.sections ?? []) {
    if (section.sectionType !== 'footer') continue;
    const variant = findVariant(section.variantId);
    if (!variant) continue;

    const name = uniqueName(pascalCase(section.variantId) || 'SiteFooter', usedComponentNames);
    files[`client/src/components/layout/${name}.tsx`] = withReactImports(
      withSiteName(renameDefaultExport(variant.tsx, name), projectName),
    );
    footerImports.push({ name, importPath: `../components/layout/${name}` });
  }

  // ── 4. Squelette : layout, routes, configuration ─────────────────────────
  files['client/src/layouts/MainLayout.tsx'] = renderMainLayout(footerImports);
  files['client/src/App.tsx'] = renderApp(pageInfos);
  files['client/src/config/theme.ts'] = renderTheme(input.palette);
  files['client/src/config/site.config.ts'] = renderSiteConfig(
    projectName,
    input.navLinks,
    pageInfos,
    anchorsByPage,
  );
  files['client/src/index.css'] = renderIndexCss();
  files['README.md'] = renderReadme(projectName, pageInfos, sectionComponents.size);

  return { rootDir: slug, files };
}

// ───────────────────────────── transformations de code ─────────────────────

/** `export default function Hero()` → `export default function HeroCentre()`. */
function renameDefaultExport(tsx: string, name: string): string {
  return tsx.replace(/export default function\s+[A-Za-z0-9_$]*\s*\(/, `export default function ${name}(`);
}

/**
 * Ce qu'une brique peut utiliser sans que le catalogue pense à l'importer.
 * Chaque motif exige un usage réel (appel ou balise) : un simple mot dans un
 * texte ne doit pas déclencher un import, qui serait inutilisé et casserait
 * le build du projet généré (`noUnusedLocals`).
 */
const REACT_EXPORTS: { name: string; usage: RegExp }[] = [
  ...['useState', 'useEffect', 'useRef', 'useMemo', 'useCallback', 'useReducer',
      'useContext', 'useId', 'useLayoutEffect', 'useTransition',
      'memo', 'forwardRef', 'createContext']
    .map(name => ({ name, usage: new RegExp(`\\b${name}\\s*\\(`) })),
  { name: 'Fragment', usage: /<\/?Fragment[\s/>]/ },
];

/**
 * Ajoute l'import React quand une brique utilise un hook sans le déclarer.
 *
 * Les `tsx` du catalogue sont écrits à la main : l'import est facile à oublier,
 * et l'oubli ne se voit pas dans l'aperçu (qui rend du HTML, pas du React).
 * Ce filet évite de livrer un projet qui ne compile pas.
 */
function withReactImports(tsx: string): string {
  if (/^import\s[^;]*from\s+['"]react['"]/m.test(tsx)) return tsx;

  const used = REACT_EXPORTS.filter(entry => entry.usage.test(tsx)).map(entry => entry.name);
  if (used.length === 0) return tsx;

  return `import { ${used.join(', ')} } from 'react';\n\n${tsx}`;
}

/** Remplace le texte de remplacement « Mon site » par le vrai nom du projet. */
function withSiteName(tsx: string, projectName: string): string {
  return tsx.split('Mon site').join(projectName);
}

/**
 * Remplace le contenu du premier `<nav>` par une boucle sur `siteConfig.nav`,
 * pour que la navbar générée reflète les liens configurés à l'étape « Config. site ».
 * Le `className` du premier lien sert de modèle de style pour tous les autres.
 */
function injectNavLinks(tsx: string): { code: string; changed: boolean } {
  const open = /<nav\b[^>]*>/.exec(tsx);
  if (!open || open[0].endsWith('/>')) return { code: tsx, changed: false };

  const start = open.index;
  const end = tsx.indexOf('</nav>', start);
  if (end < 0) return { code: tsx, changed: false };

  const inner = tsx.slice(start + open[0].length, end);
  const linkClass = /<a\b[^>]*className="([^"]*)"/.exec(inner)?.[1] ?? '';

  const block =
    `${open[0]}\n` +
    `          {siteConfig.nav.map((item) => (\n` +
    `            <NavItem key={item.label + item.href} item={item} className="${linkClass}" />\n` +
    `          ))}\n` +
    `        `;

  return { code: tsx.slice(0, start) + block + tsx.slice(end), changed: true };
}

/**
 * Transforme le lien du logo `<a href="/">…</a>` en `<Link to="/">…</Link>`
 * pour éviter un rechargement complet de la page.
 */
function linkifyHomeLink(tsx: string): { code: string; changed: boolean } {
  const open = /<a\s+href="\/"/.exec(tsx);
  if (!open) return { code: tsx, changed: false };

  const start = open.index;
  const close = tsx.indexOf('</a>', start);
  if (close < 0) return { code: tsx, changed: false };

  const segment = tsx
    .slice(start, close + 4)
    .replace(/^<a\s+href="\/"/, '<Link to="/"')
    .replace(/<\/a>$/, '</Link>');

  return { code: tsx.slice(0, start) + segment + tsx.slice(close + 4), changed: true };
}

/** Assemble le composant NavMain à partir de la variante de navbar choisie. */
function buildNavMain(tsx: string, projectName: string): string {
  const imports: string[] = [];

  // L'ordre compte : si le logo se trouve à l'intérieur du <nav>, il disparaît
  // avec l'injection des liens — inutile alors d'importer <Link>, qui resterait
  // inutilisé et ferait échouer le build (noUnusedLocals).
  const nav = injectNavLinks(tsx);
  let code = nav.code;
  let usesSiteConfig = nav.changed;
  if (nav.changed) imports.push(`import NavItem from './NavItem';`);

  const home = linkifyHomeLink(code);
  code = home.code;
  if (home.changed) imports.unshift(`import { Link } from 'react-router-dom';`);

  if (code.includes('Mon site')) {
    code = code.split('Mon site').join('{siteConfig.name}');
    usesSiteConfig = true;
  }
  if (usesSiteConfig) imports.unshift(`import { siteConfig } from '../../config/site.config';`);

  code = renameDefaultExport(code, 'NavMain');
  return withReactImports(imports.length ? `${imports.join('\n')}\n\n${code}` : code);
}

// ───────────────────────────── fichiers générés ────────────────────────────

/** Une page = ses sections empilées, chacune ancrée par un id pour les liens du menu. */
function renderPageFile(
  page: ComposerPage,
  componentName: string,
  anchors: Map<string, string>,
  registerSection: (variantId: string, sectionType: string) => { name: string; importPath: string } | null,
): string {
  const blocks: { name: string; importPath: string; anchor: string }[] = [];

  for (const section of page.sections) {
    const component = registerSection(section.variantId, section.sectionType);
    if (!component) continue;
    blocks.push({ ...component, anchor: anchors.get(section.variantId) ?? 'section' });
  }

  if (blocks.length === 0) {
    return `export default function ${componentName}() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-ink">${jsxSafeText(page.name) || 'Page'}</h1>
      <p className="mt-3 text-ink/60">
        Cette page est vide — ajoutez-y vos composants depuis src/components/sections.
      </p>
    </div>
  );
}
`;
  }

  const imports = blocks.map(b => `import ${b.name} from '${b.importPath}';`).join('\n');
  const body = blocks
    .map(b => `      <div id="${b.anchor}">\n        <${b.name} />\n      </div>`)
    .join('\n');

  return `${imports}

export default function ${componentName}() {
  return (
    <>
${body}
    </>
  );
}
`;
}

function renderNotFoundPage(): string {
  return `import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="font-display text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">Page introuvable</h1>
      <Link to="/" className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  );
}
`;
}

function renderDefaultNavMain(): string {
  return `import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import NavItem from './NavItem';

export default function NavMain() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-6">
        <Link to="/" className="font-display text-lg font-bold text-ink">
          {siteConfig.name}
        </Link>
        <nav className="ml-auto hidden items-center gap-7 text-sm text-ink/70 sm:flex">
          {siteConfig.nav.map((item) => (
            <NavItem key={item.label + item.href} item={item} className="transition hover:text-ink" />
          ))}
        </nav>
      </div>
    </header>
  );
}
`;
}

function renderMainLayout(footers: { name: string; importPath: string }[]): string {
  const imports = [
    `import { Outlet } from 'react-router-dom';`,
    `import NavMain from '../components/layout/NavMain';`,
    ...footers.map(f => `import ${f.name} from '${f.importPath}';`),
  ].join('\n');

  const footerMarkup = footers.map(f => `      <${f.name} />`).join('\n');

  return `${imports}

/** Enveloppe commune à toutes les pages : navigation, contenu, pied de page. */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-pageBg font-sans text-ink">
      <NavMain />
      <main className="flex-1">
        <Outlet />
      </main>
${footerMarkup}
    </div>
  );
}
`;
}

function renderApp(pageInfos: { componentName: string; route: string }[]): string {
  const imports = [
    `import { BrowserRouter, Route, Routes } from 'react-router-dom';`,
    `import ScrollToHash from './components/layout/ScrollToHash';`,
    `import MainLayout from './layouts/MainLayout';`,
    ...pageInfos.map(p => `import ${p.componentName} from './pages/${p.componentName}';`),
    `import NotFoundPage from './pages/NotFoundPage';`,
  ].join('\n');

  const routes = pageInfos
    .map(p => `          <Route path="${p.route}" element={<${p.componentName} />} />`)
    .join('\n');

  return `${imports}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<MainLayout />}>
${routes}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
`;
}

function renderTheme(palette: ColorPalette): string {
  return `/**
 * Le thème du site — source unique de vérité pour les couleurs.
 *
 * Ce fichier est lu par « tailwind.config.ts » (qui en fait des classes
 * utilitaires : bg-brand, text-ink…) et reste importable depuis le code React
 * quand vous avez besoin d'une couleur en JavaScript.
 * Changez une valeur ici, tout le site suit.
 */
export const theme = {
  colors: {
    brand: {
      DEFAULT: '${palette.brand.default}',
      dark: '${palette.brand.dark}',
    },
    /** Texte principal. */
    ink: '${palette.ink}',
    /** Fond des blocs de contenu (classe « bg-white »). */
    surface: '${palette.surface}',
    /** Fond de la page, visible entre les sections (classe « bg-pageBg »). */
    pageBg: '${palette.pageBg}',
  },
  fonts: {
    display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
};
`;
}

function renderSiteConfig(
  projectName: string,
  navLinks: NavLink[],
  pageInfos: { page: ComposerPage; route: string }[],
  anchorsByPage: Map<string, Map<string, string>>,
): string {
  const routeFor = (pageId: string | undefined): string =>
    pageInfos.find(info => info.page.id === pageId)?.route ?? '/';

  const hrefFor = (link: NavLink): string => {
    if (link.type === 'external') return (link.url ?? '').trim() || '#';
    const base = routeFor(link.pageId);
    if (link.type !== 'anchor') return base;

    // La section ciblée est choisie explicitement à l'étape « Config. site ».
    // Repli sur le libellé du lien pour les liens créés avant ce sélecteur.
    const anchor = link.anchorVariantId
      ? anchorsByPage.get(link.pageId ?? '')?.get(link.anchorVariantId)
      : undefined;
    const target = anchor ?? slugify(link.label);
    return target ? `${base}#${target}` : base;
  };

  const entries = navLinks
    .map(link => {
      const label = quote(jsxSafeText(link.label) || 'Lien');
      return `  { label: ${label}, href: ${quote(hrefFor(link))}, type: '${link.type}' },`;
    })
    .join('\n');

  return `/**
 * La configuration globale du site : identité et navigation.
 * « NavMain » lit « nav » pour construire le menu — ajoutez, retirez ou
 * réordonnez les entrées ici, la navbar suit.
 */

export type NavItemType = 'page' | 'anchor' | 'external';

export interface NavItemConfig {
  label: string;
  /** '/contact' pour une page, '/#tarifs' pour une ancre, 'https://…' pour un lien externe. */
  href: string;
  type: NavItemType;
}

const nav: NavItemConfig[] = [
${entries}
];

export const siteConfig = {
  name: ${quote(projectName)},
  description: ${quote(`${projectName} — site généré avec Calque.`)},
  nav,
};
`;
}

function renderIndexCss(): string {
  return `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-pageBg font-sans text-ink antialiased;
  }
}
`;
}

function renderReadme(
  projectName: string,
  pageInfos: { page: ComposerPage; componentName: string; route: string }[],
  sectionCount: number,
): string {
  const pageRows = pageInfos
    .map(info => `| \`${info.route}\` | \`src/pages/${info.componentName}.tsx\` | ${info.page.sections.length} section(s) |`)
    .join('\n');

  return `# ${projectName}

Projet généré avec **Calque** : front React + Vite + Tailwind, back Express, en TypeScript.
Le code vous appartient — modifiez tout ce que vous voulez.

## Démarrer

\`\`\`bash
npm install
cp .env.example .env
npm run dev
\`\`\`

Front sur http://localhost:5173, API sur http://localhost:3001.

## Organisation

\`\`\`
client/src/
├─ config/
│  ├─ theme.ts         ← toutes les couleurs du site (lu par tailwind.config.ts)
│  └─ site.config.ts   ← nom du site et liens de navigation
├─ layouts/
│  └─ MainLayout.tsx   ← navbar + contenu + footer, commun à toutes les pages
├─ components/
│  ├─ layout/          ← NavMain, footers, utilitaires de navigation
│  ├─ sections/        ← ${sectionCount} composant(s) de section, rangés par type
│  └─ ui/              ← petits éléments réutilisables (Button…)
├─ pages/              ← une page = un fichier, qui empile ses sections
└─ App.tsx             ← les routes
\`\`\`

## Les pages

| Route | Fichier | Contenu |
|---|---|---|
${pageRows}

## Recettes

**Changer les couleurs** → \`client/src/config/theme.ts\`. Tailwind et le code React lisent
le même fichier, donc une seule modification suffit.

**Modifier le menu** → \`client/src/config/site.config.ts\`. Chaque entrée a un \`type\` :
\`page\` (lien interne), \`anchor\` (défilement vers une section) ou \`external\` (site tiers).

**Ajouter une page** → créez \`src/pages/MaPage.tsx\`, puis ajoutez sa \`<Route>\` dans
\`src/App.tsx\` et son entrée dans \`site.config.ts\`.

**Ajouter une route API** → créez un fichier dans \`server/src/routes/\` et branchez-le
dans \`server/src/index.ts\`.
`;
}

/** Encadre une valeur de chaîne pour l'écrire dans du code TypeScript. */
function quote(value: string): string {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}
