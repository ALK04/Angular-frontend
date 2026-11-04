# Calque — frontend

Application Angular de **Calque** : on compose visuellement une interface (navbar, hero, sections, couleurs…) et Calque génère un projet **React + Express** téléchargeable en ZIP.

- Angular 22 (standalone components, signals)
- Le backend (.NET + Supabase) est dans un dépôt séparé : [ALK04/backend-angular](https://github.com/ALK04/backend-angular)

---

## Installer le projet sur un nouveau PC

Ce dépôt se clone **à l'intérieur** du dépôt backend, dans le dossier `frontend-angular/` :

```bash
git clone https://github.com/ALK04/backend-angular.git RiderProjects
cd RiderProjects
git clone https://github.com/ALK04/Angular-frontend.git frontend-angular
```

Puis suivre le README du backend (`RiderProjects/README.md`), notamment l'étape **mot de passe Supabase** (`appsettings.Local.json`), sinon l'API ne démarre pas.

### Prérequis

- **Node.js v24** + npm

### Lancer

```bash
cd frontend-angular
npm install
npm start
```

→ **http://localhost:4200**

Le backend doit tourner sur **http://localhost:5173** (lancé depuis Rider) pour les palettes personnalisées et les chiffres du catalogue. Sans lui, la landing affiche des chiffres de repli et le composer reste utilisable.

Ce dépôt ne contient **aucun secret** : rien à configurer côté frontend.

---

## Commandes utiles

| Commande | Rôle |
|---|---|
| `npm start` | Serveur de dev (http://localhost:4200) |
| `npx ng build --configuration development` | Build de vérification |
| `npx ng test --watch=false` | Tests (vitest + jsdom) |
| `npm run check:variants` | Contrôle syntaxique des `tsx` du catalogue de briques — à lancer après chaque ajout de variante |

## Organisation du code

- `src/app/features/landing/` — page de présentation
- `src/app/features/composer/` — flux de composition (`/composer/*`), store à base de signals, brouillon sauvegardé dans `localStorage`
- `src/app/features/composer/generator/` — moteur qui transforme la composition en projet React + Express et le zippe (JSZip, tout côté navigateur)
- `src/app/shared/` — composants partagés (header, footer)
- `src/styles.css` — tokens de design globaux

L'architecture détaillée est décrite dans `CLAUDE.md` à la racine du dépôt backend.
