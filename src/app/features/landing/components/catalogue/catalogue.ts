import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal.directive';
import {
  CatalogueApiService,
  CatalogueStats,
} from '../../../../services/catalogue-api.service';

/** Forme du wireframe dessiné sur la carte d'une famille. */
type Glyph = 'nav' | 'hero' | 'content' | 'form' | 'grid' | 'footer';

/**
 * Repli affiché tant que l'API n'a pas répondu (et si le backend est éteint).
 * Doit rester aligné sur le semis de la migration `AddCatalogueModules` :
 * la base reste la source de vérité, ceci n'est qu'un filet de sécurité.
 */
const FALLBACK_STATS: CatalogueStats = {
  totalVariants: 73,
  moduleCount: 21,
  familyCount: 6,
  updatedAt: null,
  families: [
    {
      code: 'A',
      name: 'Navigation',
      variantCount: 15,
      modules: [
        { id: 'navbar', name: 'Navbar', variantCount: 11 },
        { id: 'header', name: 'Header de page', variantCount: 4 },
      ],
    },
    {
      code: 'B',
      name: 'En-têtes',
      variantCount: 7,
      modules: [
        { id: 'hero', name: 'Hero', variantCount: 5 },
        { id: 'cta', name: 'CTA', variantCount: 2 },
      ],
    },
    {
      code: 'C',
      name: 'Présentation',
      variantCount: 24,
      modules: [
        { id: 'features', name: 'Fonctionnalités', variantCount: 2 },
        { id: 'process', name: 'Processus / Étapes', variantCount: 2 },
        { id: 'story', name: 'À propos / Histoire', variantCount: 4 },
        { id: 'stats', name: 'Statistiques', variantCount: 5 },
        { id: 'testimonials', name: 'Témoignages', variantCount: 3 },
        { id: 'quote', name: 'Citation', variantCount: 2 },
        { id: 'logos', name: 'Logos / Presse', variantCount: 3 },
        { id: 'team', name: 'Équipe', variantCount: 3 },
      ],
    },
    {
      code: 'D',
      name: 'Conversion',
      variantCount: 14,
      modules: [
        { id: 'pricing', name: 'Tarifs', variantCount: 1 },
        { id: 'faq', name: 'FAQ', variantCount: 3 },
        { id: 'forms', name: 'Formulaire', variantCount: 7 },
        { id: 'contact', name: 'Contact', variantCount: 3 },
      ],
    },
    {
      code: 'E',
      name: 'Vitrine',
      variantCount: 10,
      modules: [
        { id: 'portfolio', name: 'Portfolio / Galerie', variantCount: 4 },
        { id: 'product', name: 'Fiche produit', variantCount: 1 },
        { id: 'blog', name: 'Blog / Articles', variantCount: 3 },
        { id: 'video', name: 'Vidéo / Démo', variantCount: 2 },
      ],
    },
    {
      code: 'F',
      name: 'Pied de page',
      variantCount: 3,
      modules: [{ id: 'footer', name: 'Footer', variantCount: 3 }],
    },
  ],
};

const GLYPHS: Record<string, Glyph> = {
  A: 'nav',
  B: 'hero',
  C: 'content',
  D: 'form',
  E: 'grid',
  F: 'footer',
};

@Component({
  selector: 'app-catalogue',
  imports: [Reveal],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue implements OnInit {
  private readonly api = inject(CatalogueApiService);

  /** Chiffres du catalogue : servis par la BDD, avec repli statique. */
  protected readonly stats = signal<CatalogueStats>(FALLBACK_STATS);

  /** true dès que les chiffres affichés viennent réellement de la base. */
  protected readonly fromDb = signal(false);

  protected readonly families = computed(() => this.stats().families);

  /** Famille la plus fournie — petit chiffre de déco, calculé, jamais inventé. */
  protected readonly richestFamily = computed(() =>
    this.families().reduce(
      (best, f) => (f.variantCount > best.variantCount ? f : best),
      this.families()[0],
    ),
  );

  /** Date de dernière mise à jour du catalogue, formatée en français. */
  protected readonly updatedLabel = computed(() => {
    const iso = this.stats().updatedAt;
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
  });

  ngOnInit(): void {
    this.api.getStats().subscribe({
      next: (s) => {
        if (s?.families?.length) {
          this.stats.set(s);
          this.fromDb.set(true);
        }
      },
      // Backend éteint : on garde le repli statique, la section reste lisible.
      error: () => {},
    });
  }

  protected glyphFor(code: string): Glyph {
    return GLYPHS[code] ?? 'content';
  }
}
