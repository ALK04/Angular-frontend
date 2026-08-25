import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal.directive';

interface Step {
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  imports: [Reveal],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
  protected readonly steps: Step[] = [
    {
      title: 'Choisir au catalogue',
      description:
        'Parcourez les modules (navbar, hero, sections, footer) et gardez ceux dont vous avez besoin. Rien à dessiner, ils arrivent déjà codés.',
    },
    {
      title: 'Composer les pages',
      description:
        'Réglez l’ordre des modules, répartissez-les sur autant de pages que voulu. La navbar se construit toute seule à partir de vos pages.',
    },
    {
      title: 'Générer le dépôt',
      description:
        'Calque assemble un monorepo React + Vite + Tailwind + Express, propre et documenté. npm install, npm run dev, et le code est à vous.',
    },
  ];
}
