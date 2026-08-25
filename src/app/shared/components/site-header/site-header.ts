import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  /** Avancement du défilement de la page, en pourcentage (0–100). */
  protected readonly progress = signal(0);

  @HostListener('window:scroll')
  protected onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.progress.set(max > 0 ? (doc.scrollTop / max) * 100 : 0);
  }
}
