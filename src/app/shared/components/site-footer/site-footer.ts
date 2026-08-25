import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer class="footer">
      <div class="shell">
        <div class="top">
          <a class="brand" href="/" aria-label="Calque, accueil">
            <span class="brand-mark" aria-hidden="true">
              <span class="layer"></span>
              <span class="layer"></span>
            </span>
            Calque
          </a>

          <nav class="links" aria-label="Liens de pied de page">
            <a href="#procede">Procédé</a>
            <a href="#catalogue">Catalogue</a>
            <a href="#livraison">Livraison</a>
            <a href="#questions">Questions</a>
          </nav>
        </div>

        <div class="base">
          <span class="claim">Composez votre interface. Le code suit.</span>
          <span class="note">Générateur de projet React&nbsp;+&nbsp;Node, prototype en cours.</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--line);
      padding: 3rem 0 2.5rem;
      margin-top: 1rem;
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.25rem;
      padding-bottom: 1.75rem;
      border-bottom: 1px solid var(--line);
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.1rem;
    }
    .brand-mark { position: relative; width: 22px; height: 22px; }
    .brand-mark .layer { position: absolute; width: 15px; height: 15px; border-radius: 5px; }
    .brand-mark .layer:first-child { top: 0; left: 0; background: var(--violet); opacity: 0.92; }
    .brand-mark .layer:last-child { bottom: 0; right: 0; background: var(--amber); mix-blend-mode: multiply; }

    .links { display: flex; flex-wrap: wrap; gap: 1.5rem; font-size: 0.92rem; color: var(--ink-soft); }
    .links a:hover { color: var(--ink); }

    .base {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
      padding-top: 1.5rem;
    }
    .claim { font-family: var(--font-display); font-weight: 500; color: var(--ink); }
    .note {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.04em;
      color: var(--ink-faint);
    }
  `],
})
export class SiteFooter {}
