import { BrickVariant } from '../../../models/brick-variant.model';
import { NAVBAR_VARIANTS } from './navbar-variants';
import { HERO_VARIANTS } from './hero-variants';
import { HEADER_VARIANTS } from './header-variants';
import { FEATURES_VARIANTS } from './features-variants';
import { PROCESS_VARIANTS } from './process-variants';
import { VIDEO_VARIANTS } from './video-variants';
import { PRICING_VARIANTS } from './pricing-variants';
import { STORY_VARIANTS } from './story-variants';
import { STATS_VARIANTS } from './stats-variants';
import { TEAM_VARIANTS } from './team-variants';
import { TESTIMONIALS_VARIANTS } from './testimonials-variants';
import { QUOTE_VARIANTS } from './quote-variants';
import { LOGOS_VARIANTS } from './logos-variants';
import { PORTFOLIO_VARIANTS } from './portfolio-variants';
import { PRODUCT_VARIANTS } from './product-variants';
import { BLOG_VARIANTS } from './blog-variants';
import { CTA_VARIANTS } from './cta-variants';
import { FAQ_VARIANTS } from './faq-variants';
import { FORMS_VARIANTS } from './forms-variants';
import { CONTACT_VARIANTS } from './contact-variants';
import { FOOTER_VARIANTS } from './footer-variants';

/**
 * Catalogue complet, indexé par type de section.
 * Les clés sont les mêmes que celles de SECTION_CATALOG et de `PageSection.sectionType`.
 * Ajouter une famille de briques = une ligne ici, et le générateur la prend en compte.
 */
export const VARIANTS_BY_TYPE: Record<string, BrickVariant[]> = {
  navbar:       NAVBAR_VARIANTS,
  hero:         HERO_VARIANTS,
  header:       HEADER_VARIANTS,
  features:     FEATURES_VARIANTS,
  process:      PROCESS_VARIANTS,
  video:        VIDEO_VARIANTS,
  pricing:      PRICING_VARIANTS,
  story:        STORY_VARIANTS,
  stats:        STATS_VARIANTS,
  team:         TEAM_VARIANTS,
  testimonials: TESTIMONIALS_VARIANTS,
  quote:        QUOTE_VARIANTS,
  logos:        LOGOS_VARIANTS,
  portfolio:    PORTFOLIO_VARIANTS,
  product:      PRODUCT_VARIANTS,
  blog:         BLOG_VARIANTS,
  cta:          CTA_VARIANTS,
  faq:          FAQ_VARIANTS,
  forms:        FORMS_VARIANTS,
  contact:      CONTACT_VARIANTS,
  footer:       FOOTER_VARIANTS,
};

const BY_ID: Record<string, BrickVariant> = (() => {
  const map: Record<string, BrickVariant> = {};
  for (const list of Object.values(VARIANTS_BY_TYPE)) {
    for (const variant of list) map[variant.id] = variant;
  }
  return map;
})();

/** Retrouve une variante par son id (`hero-centre`, `pricing-simple`…). */
export function findVariant(id: string): BrickVariant | undefined {
  return BY_ID[id];
}
