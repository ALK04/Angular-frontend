import { Component } from '@angular/core';
import { Feature } from '../../../../models/feature.model';
import { Reveal } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-feature-list',
  imports: [Reveal],
  templateUrl: './feature-list.html',
  styleUrl: './feature-list.css',
})
export class FeatureList {
  protected readonly features: Feature[] = [
    {
      label: 'Catalogue',
      title: 'Un catalogue de modules',
      description:
        'Navbars, heros, sections, footers : parcourez, choisissez, ils arrivent déjà codés. Pas de bloc à placer.',
    },
    {
      label: 'Pages',
      title: 'Ordre & multi-pages',
      description:
        'Décidez de l’ordre de vos modules et répartissez-les sur autant de pages que vous voulez, sans toucher au code.',
    },
    {
      label: 'Navbar',
      title: 'Navigation auto-réglée',
      description:
        'La navbar choisie se construit à partir de vos pages : ajoutez une page, le lien apparaît dans le menu.',
    },
    {
      label: 'Export',
      title: 'Du React + Node, à vous',
      description:
        'Téléchargez le dossier, npm install, npm run dev. Aucun lock-in : le code vous appartient.',
    },
  ];
}
