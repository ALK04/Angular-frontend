import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AccentPreset } from '../../data/accents';

/**
 * Aperçu d'une brique React/Tailwind dans une iframe isolée.
 *
 * Pourquoi une iframe ? Angular ne peut pas exécuter du React, et le reset
 * Tailwind entrerait en conflit avec les styles de l'app. L'iframe nous donne
 * un rendu Tailwind réel + une isolation totale. Le CDN Tailwind ci-dessous
 * sert UNIQUEMENT à l'aperçu : le projet généré utilise le vrai Tailwind compilé.
 *
 * La couleur `brand` du thème est pilotée par l'entrée `accent`, donc changer
 * la couleur repeint toutes les navbars d'un coup (l'iframe est reconstruite).
 */
@Component({
  selector: 'app-brick-preview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<iframe
    class="frame"
    [srcdoc]="srcDoc()"
    [style.height.px]="height()"
    title="Aperçu de la brique"
    loading="lazy"
    sandbox="allow-scripts"
  ></iframe>`,
  styles: [
    `:host { display: block; }
     .frame { width: 100%; border: 0; display: block; background: #f8f9fc; pointer-events: none; }`,
  ],
})
export class BrickPreview {
  private readonly sanitizer = inject(DomSanitizer);

  readonly html = input.required<string>();
  readonly accent = input.required<AccentPreset>();
  readonly height = input<number>(175);

  // Contenu 100 % maîtrisé (nos propres briques) → srcdoc complet autorisé.
  protected readonly srcDoc = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.document(this.html(), this.accent())),
  );

  private document(body: string, accent: AccentPreset): string {
    return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
    rel="stylesheet"
  />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: { DEFAULT: '${accent.default}', dark: '${accent.dark}' },
            ink: '#14121f',
          },
          fontFamily: {
            display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
    };
  </script>
  <style>
    body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #eef0f5; }
  </style>
</head>
<body>
  ${body}
  <div class="mx-auto max-w-6xl space-y-3 px-6 py-6">
    <div class="h-3 w-40 rounded bg-ink/10"></div>
    <div class="h-3 w-64 rounded bg-ink/10"></div>
  </div>
</body>
</html>`;
  }
}
