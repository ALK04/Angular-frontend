import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal.directive';

interface QA {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [Reveal],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly items: QA[] = [
    {
      question: 'Est-ce que je suis enfermé dans Calque ?',
      answer:
        'Non. Calque génère un dépôt standard que vous téléchargez. Aucun compte, aucun runtime maison : le projet tourne tout seul sur n’importe quelle machine avec Node.',
    },
    {
      question: 'Quelle est la stack générée ?',
      answer:
        'React + Vite + Tailwind côté interface, Express côté serveur, le tout en TypeScript, organisé en monorepo npm workspaces. Une seule commande lance les deux.',
    },
    {
      question: 'Et la base de données ?',
      answer:
        'Elle n’est pas imposée. L’emplacement est déjà prévu dans .env et server/, vous y branchez Postgres, SQLite ou autre le jour où vous en avez besoin.',
    },
    {
      question: 'Faut-il savoir coder ?',
      answer:
        'Oui, Calque est fait pour les développeurs. Il supprime la mise en place répétitive, pas le développement : vous récupérez la main dès le premier npm run dev.',
    },
    {
      question: 'C’est payant ?',
      answer:
        'Le projet est un prototype, gratuit pendant cette phase. Et le code généré vous appartient : pas d’abonnement pour continuer à l’utiliser.',
    },
  ];
}
