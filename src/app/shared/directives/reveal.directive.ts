import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Révélation au défilement : l'élément monte + apparaît quand il entre dans le
 * viewport. Stagger via [appReveal]="delaiEnMs".
 *
 *   <li [appReveal]="i * 80"> … </li>
 *
 * Respecte prefers-reduced-motion (affiche tout de suite, sans animation).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class Reveal implements OnInit, OnDestroy {
  /** Délai d'apparition en millisecondes (pour le décalage en cascade). */
  @Input('appReveal') delay: number | '' = 0;

  private readonly host = inject(ElementRef).nativeElement as HTMLElement;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host;
    el.classList.add('reveal');
    el.style.animationDelay = `${Number(this.delay) || 0}ms`;

    const reduce =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
