/**
 * Les fichiers du projet généré qui ne dépendent d'aucun choix de l'utilisateur :
 * outillage (Vite, TypeScript, Tailwind, PostCSS), serveur Express, .gitignore…
 *
 * Ils sont écrits ici en dur parce que le générateur tourne dans le navigateur :
 * il n'a aucun accès au disque et ne peut donc pas lire `templates/react-express-starter/`.
 * Ce dossier reste la référence lisible côté dépôt — garder les deux alignés.
 */

export interface StaticFilesInput {
  /** Nom affiché du projet (sert au <title>). */
  projectName: string;
  /** Version « slug » du nom (sert au champ `name` des package.json). */
  slug: string;
}

export function buildStaticFiles({ projectName, slug }: StaticFilesInput): Record<string, string> {
  return {
    'package.json': `{
  "name": "${slug}",
  "version": "0.1.0",
  "private": true,
  "description": "Projet généré par Calque — front React/Vite + back Express.",
  "workspaces": [
    "client",
    "server"
  ],
  "scripts": {
    "dev": "concurrently -n client,server -c blue,green \\"npm run dev -w client\\" \\"npm run dev -w server\\"",
    "build": "npm run build -w client && npm run build -w server",
    "start": "npm run start -w server"
  },
  "devDependencies": {
    "concurrently": "^9.1.0"
  }
}
`,

    '.gitignore': `node_modules
dist
.env
*.local
.DS_Store
`,

    '.env.example': `# Copiez ce fichier en « .env » puis adaptez les valeurs.

# --- Serveur Express ---
PORT=3001

# --- Client (Vite) ---
# URL que le front utilise pour appeler l'API.
VITE_API_URL=http://localhost:3001

# --- Base de données (hors MVP, à activer plus tard) ---
# Le starter ne contient pas encore de BDD. Quand vous en ajouterez une
# (Prisma, Drizzle, Knex…), c'est ici que vivra la chaîne de connexion.
# DATABASE_URL=
`,

    // ─────────────────────────── client ───────────────────────────

    'client/package.json': `{
  "name": "client",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.1"
  },
  "devDependencies": {
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2",
    "vite": "^6.0.5"
  }
}
`,

    'client/index.html': `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,

    'client/vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
`,

    'client/postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

    // La config Tailwind lit src/config/theme.ts : une seule source de vérité
    // pour les couleurs, partagée entre les classes utilitaires et le code React.
    'client/tailwind.config.ts': `import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: theme.colors.brand,
        ink: theme.colors.ink,
        // Les sections utilisent « bg-white » comme fond de bloc : on le remappe
        // sur la couleur de surface de la palette choisie.
        white: theme.colors.surface,
        pageBg: theme.colors.pageBg,
      },
      fontFamily: theme.fonts,
    },
  },
  plugins: [],
} satisfies Config;
`,

    'client/tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
`,

    'client/src/vite-env.d.ts': `/// <reference types="vite/client" />
`,

    'client/src/main.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`,

    'client/src/lib/api.ts': `/** Petit client HTTP vers l'API Express. */
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export async function getHealth(): Promise<{ status: string }> {
  const res = await fetch(\`\${API_URL}/api/health\`);
  if (!res.ok) {
    throw new Error(\`Requête échouée (\${res.status})\`);
  }
  return res.json();
}
`,

    'client/src/components/ui/Button.tsx': `import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  ghost: 'border border-ink/20 text-ink hover:border-ink',
};

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={\`rounded-xl px-5 py-2.5 font-medium transition active:translate-y-px \${styles[variant]} \${className}\`}
      {...props}
    />
  );
}
`,

    // Fait défiler jusqu'à l'ancre après une navigation react-router
    // (le navigateur ne le fait pas tout seul quand l'URL change sans rechargement).
    'client/src/components/layout/ScrollToHash.tsx': `import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}
`,

    // Rend un lien de navigation selon son type : page interne, ancre, lien externe.
    'client/src/components/layout/NavItem.tsx': `import { Link } from 'react-router-dom';
import type { NavItemConfig } from '../../config/site.config';

interface NavItemProps {
  item: NavItemConfig;
  className?: string;
}

export default function NavItem({ item, className }: NavItemProps) {
  if (item.type === 'external') {
    return (
      <a href={item.href} className={className} target="_blank" rel="noreferrer">
        {item.label}
      </a>
    );
  }

  // 'page' et 'anchor' restent internes : <Link> évite un rechargement complet,
  // et ScrollToHash s'occupe du défilement quand l'URL contient une ancre.
  return (
    <Link to={item.href} className={className}>
      {item.label}
    </Link>
  );
}
`,

    // ─────────────────────────── server ───────────────────────────

    'server/package.json': `{
  "name": "server",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc --noEmit",
    "start": "tsx src/index.ts"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.2"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.0",
    "@types/node": "^22.10.2",
    "tsx": "^4.19.2",
    "typescript": "^5.7.2"
  }
}
`,

    'server/tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "noEmit": true
  },
  "include": ["src"]
}
`,

    'server/src/index.ts': `import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

// Routes (une route = un fichier dans ./routes)
app.use('/api/health', healthRouter);

// Gestion centralisée des erreurs (toujours en dernier)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(\`API prête sur http://localhost:\${PORT}\`);
});
`,

    'server/src/routes/health.ts': `import { Router } from 'express';

export const healthRouter = Router();

// GET /api/health → vérifie que l'API répond
healthRouter.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});
`,

    'server/src/middleware/errorHandler.ts': `import type { NextFunction, Request, Response } from 'express';

/** Middleware de gestion d'erreurs : renvoie une réponse JSON propre. */
export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  console.error(err);
  res.status(500).json({ error: 'Erreur serveur' });
}
`,
  };
}
