export interface SectionDef {
  id: string;
  name: string;
  description: string;
  svg: string;
}

const S = (content: string) =>
  `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;

export const SECTION_CATALOG: SectionDef[] = [
  {
    id: 'header',
    name: 'Header de page',
    description: 'Bandeau titre pour les pages intérieures (À propos, Blog, Contact…)',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="0" y="10" width="200" height="100" fill="rgba(20,18,31,0.95)"/>
      <rect x="72" y="24" width="56" height="4" rx="2" fill="rgba(255,255,255,0.12)"/>
      <rect x="44" y="35" width="112" height="10" rx="2.5" fill="rgba(255,255,255,0.65)"/>
      <rect x="60" y="51" width="80" height="5" rx="1.5" fill="rgba(255,255,255,0.18)"/>
      <rect x="68" y="60" width="64" height="4" rx="1.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="78" y="80" width="18" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="99" y="80" width="5" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="107" y="80" width="20" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
    `),
  },
  {
    id: 'hero',
    name: 'Hero',
    description: 'Accroche principale, sous-titre et CTA',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="12" y="16" width="88" height="11" rx="2" fill="rgba(255,255,255,0.28)"/>
      <rect x="12" y="32" width="68" height="8" rx="1.5" fill="rgba(255,255,255,0.16)"/>
      <rect x="12" y="44" width="54" height="6" rx="1.5" fill="rgba(255,255,255,0.09)"/>
      <rect x="12" y="58" width="50" height="18" rx="9" fill="rgba(91,61,245,0.65)"/>
      <rect x="116" y="12" width="72" height="84" rx="8" fill="rgba(255,255,255,0.05)"/>
      <circle cx="152" cy="54" r="20" fill="rgba(255,255,255,0.04)"/>
    `),
  },
  {
    id: 'features',
    name: 'Fonctionnalités',
    description: 'Grille de features avec icône et texte',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="20" y="8" width="160" height="8" rx="1.5" fill="rgba(255,255,255,0.14)"/>
      <rect x="44" y="20" width="112" height="5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <circle cx="35" cy="60" r="12" fill="rgba(91,61,245,0.28)"/>
      <rect x="16" y="77" width="38" height="5" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="20" y="86" width="30" height="3.5" rx="1" fill="rgba(255,255,255,0.09)"/>
      <rect x="20" y="93" width="26" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <circle cx="100" cy="60" r="12" fill="rgba(91,61,245,0.28)"/>
      <rect x="81" y="77" width="38" height="5" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="85" y="86" width="30" height="3.5" rx="1" fill="rgba(255,255,255,0.09)"/>
      <rect x="85" y="93" width="26" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <circle cx="165" cy="60" r="12" fill="rgba(91,61,245,0.28)"/>
      <rect x="146" y="77" width="38" height="5" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="150" y="86" width="30" height="3.5" rx="1" fill="rgba(255,255,255,0.09)"/>
      <rect x="150" y="93" width="26" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
    `),
  },
  {
    id: 'pricing',
    name: 'Tarifs',
    description: '2 ou 3 plans tarifaires comparatifs',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="5" y="14" width="56" height="92" rx="5" fill="rgba(255,255,255,0.04)"/>
      <rect x="5" y="14" width="56" height="92" rx="5" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>
      <rect x="72" y="6" width="56" height="108" rx="5" fill="rgba(91,61,245,0.12)"/>
      <rect x="72" y="6" width="56" height="108" rx="5" stroke="rgba(91,61,245,0.5)" stroke-width="1"/>
      <rect x="139" y="14" width="56" height="92" rx="5" fill="rgba(255,255,255,0.04)"/>
      <rect x="139" y="14" width="56" height="92" rx="5" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>
      <rect x="13" y="23" width="40" height="9" rx="1.5" fill="rgba(255,255,255,0.18)"/>
      <rect x="80" y="16" width="40" height="11" rx="1.5" fill="rgba(255,255,255,0.3)"/>
      <rect x="147" y="23" width="40" height="9" rx="1.5" fill="rgba(255,255,255,0.18)"/>
      <rect x="11" y="40" width="44" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="11" y="47" width="38" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="11" y="54" width="42" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="78" y="36" width="44" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="78" y="43" width="40" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="78" y="50" width="44" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="78" y="57" width="36" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="145" y="40" width="44" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="145" y="47" width="38" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="145" y="54" width="42" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="15" y="92" width="36" height="10" rx="5" fill="rgba(255,255,255,0.1)"/>
      <rect x="82" y="92" width="36" height="14" rx="7" fill="rgba(91,61,245,0.7)"/>
      <rect x="149" y="92" width="36" height="10" rx="5" fill="rgba(255,255,255,0.1)"/>
    `),
  },
  {
    id: 'video',
    name: 'Vidéo / Démo',
    description: 'Lecteur vidéo ou bouton play avec lightbox pour démontrer le produit',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="6" y="18" width="188" height="84" rx="8" fill="rgba(30,16,48,0.9)"/>
      <rect x="6" y="18" width="188" height="84" rx="8" stroke="rgba(91,61,245,0.2)" stroke-width="0.7"/>
      <rect x="6" y="18" width="44" height="84" rx="4" fill="rgba(0,0,0,0.25)"/>
      <rect x="50" y="22" width="138" height="76" rx="3" fill="rgba(255,255,255,0.03)"/>
      <rect x="54" y="26" width="60" height="30" rx="3" fill="rgba(91,61,245,0.12)"/>
      <rect x="54" y="60" width="130" height="30" rx="3" fill="rgba(255,255,255,0.04)"/>
      <circle cx="100" cy="60" r="17" fill="rgba(255,255,255,0.92)"/>
      <polygon points="96,53 96,67 110,60" fill="#14121f"/>
      <rect x="6" y="98" width="188" height="3" rx="1.5" fill="rgba(255,255,255,0.07)"/>
      <rect x="6" y="98" width="65" height="3" rx="1.5" fill="rgba(91,61,245,0.7)"/>
      <rect x="178" y="84" width="12" height="7" rx="2" fill="rgba(0,0,0,0.55)"/>
    `),
  },
  {
    id: 'process',
    name: 'Processus / Étapes',
    description: 'Frise étapes (Comment ça marche) en colonnes ou timeline',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="50" y="8" width="100" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <line x1="32" y1="42" x2="168" y2="42" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <circle cx="32" cy="42" r="14" fill="rgba(91,61,245,0.65)"/>
      <circle cx="100" cy="42" r="14" fill="rgba(255,255,255,0.07)"/>
      <circle cx="168" cy="42" r="14" fill="rgba(255,255,255,0.07)"/>
      <text x="32" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="white" font-family="monospace">01</text>
      <text x="100" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="rgba(255,255,255,0.3)" font-family="monospace">02</text>
      <text x="168" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="rgba(255,255,255,0.3)" font-family="monospace">03</text>
      <rect x="12" y="65" width="40" height="5" rx="1" fill="rgba(91,61,245,0.65)"/>
      <rect x="80" y="65" width="40" height="5" rx="1" fill="rgba(255,255,255,0.14)"/>
      <rect x="148" y="65" width="40" height="5" rx="1" fill="rgba(255,255,255,0.14)"/>
      <rect x="12" y="74" width="36" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="80" y="74" width="36" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="148" y="74" width="36" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="12" y="80" width="30" height="3" rx="1" fill="rgba(255,255,255,0.05)"/>
      <rect x="80" y="80" width="30" height="3" rx="1" fill="rgba(255,255,255,0.05)"/>
      <rect x="148" y="80" width="30" height="3" rx="1" fill="rgba(255,255,255,0.05)"/>
    `),
  },
  {
    id: 'story',
    name: 'À propos / Histoire',
    description: 'Bloc mission ou histoire de la boîte, texte + image',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="6" y="14" width="28" height="3.5" rx="1" fill="rgba(91,61,245,0.55)"/>
      <rect x="6" y="22" width="84" height="9" rx="1.5" fill="rgba(255,255,255,0.24)"/>
      <rect x="6" y="37" width="74" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="6" y="44" width="80" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="6" y="51" width="64" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="6" y="58" width="70" height="3.5" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="6" y="72" width="44" height="14" rx="7" fill="rgba(91,61,245,0.55)"/>
      <rect x="106" y="6" width="88" height="108" rx="10" fill="rgba(91,61,245,0.07)"/>
      <rect x="106" y="6" width="88" height="108" rx="10" stroke="rgba(91,61,245,0.18)" stroke-width="0.8"/>
      <circle cx="150" cy="54" r="16" fill="rgba(255,255,255,0.04)"/>
    `),
  },
  {
    id: 'team',
    name: 'Équipe',
    description: 'Cartes membres avec avatar, nom, rôle et réseaux sociaux',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="60" y="8" width="80" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <circle cx="25" cy="50" r="14" fill="rgba(91,61,245,0.2)"/>
      <circle cx="75" cy="50" r="14" fill="rgba(255,255,255,0.06)"/>
      <circle cx="125" cy="50" r="14" fill="rgba(255,255,255,0.06)"/>
      <circle cx="175" cy="50" r="14" fill="rgba(255,255,255,0.06)"/>
      <rect x="10" y="70" width="30" height="4" rx="1" fill="rgba(91,61,245,0.7)"/>
      <rect x="60" y="70" width="30" height="4" rx="1" fill="rgba(255,255,255,0.14)"/>
      <rect x="110" y="70" width="30" height="4" rx="1" fill="rgba(255,255,255,0.14)"/>
      <rect x="160" y="70" width="30" height="4" rx="1" fill="rgba(255,255,255,0.14)"/>
      <rect x="12" y="78" width="26" height="3" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="62" y="78" width="26" height="3" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="112" y="78" width="26" height="3" rx="1" fill="rgba(255,255,255,0.07)"/>
      <rect x="162" y="78" width="26" height="3" rx="1" fill="rgba(255,255,255,0.07)"/>
      <circle cx="18" cy="93" r="4" fill="rgba(91,61,245,0.4)"/>
      <circle cx="28" cy="93" r="4" fill="rgba(255,255,255,0.08)"/>
      <circle cx="68" cy="93" r="4" fill="rgba(255,255,255,0.08)"/>
      <circle cx="78" cy="93" r="4" fill="rgba(255,255,255,0.08)"/>
    `),
  },
  {
    id: 'stats',
    name: 'Statistiques',
    description: 'Chiffres clés mis en avant',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="60" y="12" width="80" height="8" rx="1.5" fill="rgba(255,255,255,0.14)"/>
      <rect x="8" y="40" width="54" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
      <rect x="73" y="34" width="54" height="62" rx="6" fill="rgba(91,61,245,0.1)"/>
      <rect x="138" y="40" width="54" height="50" rx="6" fill="rgba(255,255,255,0.04)"/>
      <rect x="16" y="50" width="38" height="16" rx="2" fill="rgba(255,255,255,0.22)"/>
      <rect x="81" y="44" width="38" height="20" rx="2" fill="rgba(91,61,245,0.6)"/>
      <rect x="146" y="50" width="38" height="16" rx="2" fill="rgba(255,255,255,0.22)"/>
      <rect x="18" y="72" width="28" height="4" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="83" y="70" width="28" height="4" rx="1" fill="rgba(255,255,255,0.12)"/>
      <rect x="148" y="72" width="28" height="4" rx="1" fill="rgba(255,255,255,0.1)"/>
    `),
  },
  {
    id: 'testimonials',
    name: 'Témoignages',
    description: 'Avis clients en carrousel ou grille',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="6" y="10" width="88" height="100" rx="6" fill="rgba(255,255,255,0.05)"/>
      <rect x="106" y="10" width="88" height="100" rx="6" fill="rgba(255,255,255,0.05)"/>
      <rect x="14" y="20" width="5" height="14" rx="1" fill="rgba(91,61,245,0.6)"/>
      <rect x="21" y="20" width="5" height="14" rx="1" fill="rgba(91,61,245,0.6)"/>
      <rect x="114" y="20" width="5" height="14" rx="1" fill="rgba(91,61,245,0.6)"/>
      <rect x="121" y="20" width="5" height="14" rx="1" fill="rgba(91,61,245,0.6)"/>
      <rect x="14" y="40" width="72" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="14" y="48" width="64" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="14" y="56" width="68" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="114" y="40" width="72" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="114" y="48" width="64" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="114" y="56" width="68" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <circle cx="22" cy="90" r="10" fill="rgba(255,255,255,0.1)"/>
      <rect x="38" y="85" width="38" height="4" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="38" y="93" width="28" height="3" rx="1" fill="rgba(255,255,255,0.09)"/>
      <circle cx="122" cy="90" r="10" fill="rgba(255,255,255,0.1)"/>
      <rect x="138" y="85" width="38" height="4" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="138" y="93" width="28" height="3" rx="1" fill="rgba(255,255,255,0.09)"/>
    `),
  },
  {
    id: 'quote',
    name: 'Citation',
    description: 'Citation ou phrase de marque mise en avant, encadrée de filets',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="86" y="22" width="6" height="14" rx="1.5" fill="rgba(91,61,245,0.7)"/>
      <rect x="95" y="22" width="6" height="14" rx="1.5" fill="rgba(91,61,245,0.7)"/>
      <rect x="40" y="50" width="120" height="6" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="54" y="62" width="92" height="6" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="74" y="84" width="52" height="1.5" fill="rgba(91,61,245,0.5)"/>
      <rect x="78" y="92" width="44" height="3.5" rx="1" fill="rgba(255,255,255,0.12)"/>
    `),
  },
  {
    id: 'logos',
    name: 'Logos / Presse',
    description: 'Bande de logos partenaires ou mentions presse',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="40" y="12" width="120" height="4" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="6" y="30" width="34" height="58" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="45" y="30" width="34" height="58" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="84" y="24" width="34" height="70" rx="4" fill="rgba(91,61,245,0.1)" stroke="rgba(91,61,245,0.4)" stroke-width="0.7"/>
      <rect x="123" y="30" width="34" height="58" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="162" y="30" width="32" height="58" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="12" y="54" width="22" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="51" y="54" width="22" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="90" y="51" width="22" height="5" rx="1" fill="rgba(91,61,245,0.7)"/>
      <rect x="129" y="54" width="22" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
      <rect x="168" y="54" width="18" height="4" rx="1" fill="rgba(255,255,255,0.13)"/>
    `),
  },
  {
    id: 'portfolio',
    name: 'Portfolio / Galerie',
    description: 'Grille de projets ou réalisations avec aperçu visuel',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="4" y="8" width="60" height="46" rx="4" fill="rgba(91,61,245,0.1)" stroke="rgba(91,61,245,0.3)" stroke-width="0.7"/>
      <rect x="70" y="8" width="60" height="46" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="136" y="8" width="60" height="46" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="4" y="60" width="60" height="46" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="70" y="60" width="60" height="46" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <rect x="136" y="60" width="60" height="46" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="0.7"/>
      <circle cx="23" cy="27" r="7" fill="rgba(91,61,245,0.3)"/>
      <rect x="8" y="40" width="36" height="3" rx="1" fill="rgba(255,255,255,0.18)"/>
      <circle cx="89" cy="27" r="7" fill="rgba(255,255,255,0.07)"/>
      <rect x="74" y="40" width="36" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <circle cx="155" cy="27" r="7" fill="rgba(255,255,255,0.07)"/>
      <rect x="140" y="40" width="36" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <circle cx="23" cy="79" r="7" fill="rgba(255,255,255,0.07)"/>
      <rect x="8" y="92" width="36" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <circle cx="89" cy="79" r="7" fill="rgba(255,255,255,0.07)"/>
      <rect x="74" y="92" width="36" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <circle cx="155" cy="79" r="7" fill="rgba(255,255,255,0.07)"/>
      <rect x="140" y="92" width="36" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
    `),
  },
  {
    id: 'product',
    name: 'Fiche produit',
    description: 'Présentation détaillée d\'un produit : visuel + descriptif, prix et CTA',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="0" y="0" width="84" height="120" fill="rgba(255,255,255,0.03)"/>
      <rect x="36" y="32" width="12" height="56" rx="3" fill="rgba(255,255,255,0.12)"/>
      <line x1="84" y1="12" x2="84" y2="108" stroke="rgba(91,61,245,0.25)" stroke-width="0.8"/>
      <rect x="98" y="20" width="46" height="4" rx="1" fill="rgba(91,61,245,0.6)"/>
      <rect x="98" y="32" width="72" height="9" rx="1.5" fill="rgba(255,255,255,0.24)"/>
      <rect x="98" y="46" width="40" height="3.5" rx="1" fill="rgba(255,255,255,0.12)"/>
      <rect x="98" y="60" width="88" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="98" y="67" width="82" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="98" y="74" width="74" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="98" y="92" width="22" height="9" rx="1.5" fill="rgba(255,255,255,0.22)"/>
      <rect x="128" y="90" width="54" height="12" rx="6" fill="rgba(91,61,245,0.55)"/>
    `),
  },
  {
    id: 'blog',
    name: 'Blog / Articles',
    description: 'Grille d\'articles avec image et extrait',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="6" y="6" width="88" height="52" rx="5" fill="rgba(255,255,255,0.05)"/>
      <rect x="106" y="6" width="88" height="52" rx="5" fill="rgba(255,255,255,0.05)"/>
      <rect x="6" y="64" width="88" height="52" rx="5" fill="rgba(255,255,255,0.05)"/>
      <rect x="106" y="64" width="88" height="52" rx="5" fill="rgba(255,255,255,0.05)"/>
      <rect x="6" y="6" width="88" height="28" rx="5" fill="rgba(255,255,255,0.04)"/>
      <rect x="106" y="6" width="88" height="28" rx="5" fill="rgba(255,255,255,0.04)"/>
      <rect x="6" y="64" width="88" height="28" rx="5" fill="rgba(91,61,245,0.07)"/>
      <rect x="106" y="64" width="88" height="28" rx="5" fill="rgba(255,255,255,0.04)"/>
      <rect x="12" y="40" width="70" height="4.5" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="12" y="48" width="56" height="3.5" rx="1" fill="rgba(255,255,255,0.09)"/>
      <rect x="112" y="40" width="70" height="4.5" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="112" y="48" width="56" height="3.5" rx="1" fill="rgba(255,255,255,0.09)"/>
      <rect x="12" y="98" width="70" height="4.5" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="12" y="106" width="56" height="3.5" rx="1" fill="rgba(255,255,255,0.09)"/>
      <rect x="112" y="98" width="70" height="4.5" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="112" y="106" width="56" height="3.5" rx="1" fill="rgba(255,255,255,0.09)"/>
    `),
  },
  {
    id: 'cta',
    name: 'CTA',
    description: 'Bannière d\'appel à l\'action pleine largeur',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="8" y="18" width="184" height="84" rx="8" fill="rgba(91,61,245,0.14)"/>
      <rect x="8" y="18" width="184" height="84" rx="8" stroke="rgba(91,61,245,0.35)" stroke-width="0.8"/>
      <rect x="48" y="34" width="104" height="10" rx="2" fill="rgba(255,255,255,0.28)"/>
      <rect x="60" y="50" width="80" height="7" rx="1.5" fill="rgba(255,255,255,0.14)"/>
      <rect x="72" y="68" width="56" height="22" rx="11" fill="rgba(91,61,245,0.7)"/>
    `),
  },
  {
    id: 'faq',
    name: 'FAQ',
    description: 'Questions fréquentes en accordéon',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="6" y="8" width="188" height="20" rx="3.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="14" y="14" width="100" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="178" y="15" width="9" height="4" rx="1" fill="rgba(255,255,255,0.18)"/>
      <rect x="6" y="34" width="188" height="20" rx="3.5" fill="rgba(91,61,245,0.1)"/>
      <rect x="6" y="34" width="188" height="20" rx="3.5" stroke="rgba(91,61,245,0.4)" stroke-width="0.7"/>
      <rect x="14" y="40" width="110" height="6" rx="1" fill="rgba(255,255,255,0.26)"/>
      <rect x="178" y="41" width="9" height="4" rx="1" fill="rgba(91,61,245,0.8)"/>
      <rect x="14" y="60" width="160" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="14" y="67" width="140" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="6" y="76" width="188" height="20" rx="3.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="14" y="82" width="90" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="178" y="83" width="9" height="4" rx="1" fill="rgba(255,255,255,0.18)"/>
      <rect x="6" y="102" width="188" height="14" rx="3.5" fill="rgba(255,255,255,0.04)"/>
      <rect x="14" y="107" width="76" height="5" rx="1" fill="rgba(255,255,255,0.14)"/>
    `),
  },
  {
    id: 'forms',
    name: 'Formulaire',
    description: 'Formulaire interactif : devis, auth, simulateur, quiz, newsletter ou avis produit',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="50" y="6" width="100" height="108" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="0.7"/>
      <circle cx="70" cy="22" r="6" fill="rgba(91,61,245,0.85)"/>
      <line x1="76" y1="22" x2="90" y2="22" stroke="rgba(91,61,245,0.5)" stroke-width="1.5"/>
      <circle cx="100" cy="22" r="6" fill="rgba(91,61,245,0.3)" stroke="rgba(91,61,245,0.7)" stroke-width="1"/>
      <line x1="106" y1="22" x2="120" y2="22" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <circle cx="130" cy="22" r="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <rect x="58" y="36" width="84" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
      <rect x="58" y="51" width="84" height="7" rx="1.5" fill="rgba(255,255,255,0.04)" stroke="rgba(91,61,245,0.55)" stroke-width="0.8"/>
      <rect x="58" y="64" width="84" height="7" rx="1.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
      <rect x="58" y="77" width="84" height="7" rx="1.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
      <rect x="58" y="94" width="84" height="14" rx="7" fill="rgba(91,61,245,0.7)"/>
    `),
  },
  {
    id: 'contact',
    name: 'Contact',
    description: 'Formulaire de contact',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="6" y="10" width="90" height="22" rx="3.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="0.7"/>
      <rect x="104" y="10" width="90" height="22" rx="3.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="0.7"/>
      <rect x="12" y="16" width="44" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="110" y="16" width="36" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="6" y="38" width="188" height="22" rx="3.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="0.7"/>
      <rect x="12" y="44" width="52" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="6" y="66" width="188" height="38" rx="3.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="0.7"/>
      <rect x="12" y="72" width="60" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="134" y="110" width="60" height="6" rx="3" fill="rgba(91,61,245,0.65)"/>
    `),
  },
  {
    id: 'footer',
    name: 'Footer',
    description: 'Pied de page avec liens et copyright',
    svg: S(`
      <rect width="200" height="120" fill="#13101f"/>
      <rect x="4" y="8" width="192" height="90" rx="5" fill="rgba(15,13,26,0.7)"/>
      <rect x="12" y="18" width="34" height="8" rx="1.5" fill="rgba(255,255,255,0.35)"/>
      <rect x="12" y="30" width="56" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="12" y="37" width="48" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="12" y="44" width="52" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="80" y="18" width="26" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="80" y="28" width="36" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="80" y="35" width="30" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="80" y="42" width="34" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="126" y="18" width="26" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="126" y="28" width="32" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="126" y="35" width="38" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="126" y="42" width="28" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="163" y="18" width="26" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="163" y="28" width="28" height="3.5" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="163" y="35" width="24" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="4" y="98" width="192" height="18" rx="0" fill="rgba(255,255,255,0.03)"/>
      <rect x="12" y="104" width="46" height="3.5" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="120" y="104" width="72" height="3.5" rx="1" fill="rgba(255,255,255,0.06)"/>
    `),
  },
];
