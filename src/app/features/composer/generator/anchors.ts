import type { ComposerPage } from '../composer.store';
import { SECTION_CATALOG } from '../data/section-catalog';
import { slugify, uniqueName } from './naming';

/**
 * Les ancres HTML des sections d'une page.
 *
 * Partagé entre le générateur (qui pose les `id` dans les fichiers de `pages/`)
 * et l'étape « Config. site » (qui construit les liens du menu) : les deux
 * doivent nommer les ancres exactement pareil, sinon un lien configuré dans
 * l'aperçu ne défilerait nulle part dans le projet livré.
 */

const SECTION_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  SECTION_CATALOG.map(section => [section.id, section.name]),
);

/** Libellé lisible d'un type de section (« pricing » → « Tarifs »). */
export function sectionTypeLabel(sectionType: string): string {
  return SECTION_TYPE_LABELS[sectionType] ?? sectionType;
}

/**
 * `variantId` → ancre, pour toutes les sections d'une page.
 * Deux sections du même type sur une page donnent `tarifs` puis `tarifs2`.
 */
export function anchorsForPage(page: ComposerPage): Map<string, string> {
  const used = new Set<string>();
  const anchors = new Map<string, string>();

  for (const section of page.sections) {
    const base = slugify(sectionTypeLabel(section.sectionType)) || 'section';
    anchors.set(section.variantId, uniqueName(base, used));
  }

  return anchors;
}
