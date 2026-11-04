import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, inject, Input, signal } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ComposerStore } from '../../composer.store';
import { AccentPicker } from '../accent-picker/accent-picker';

/** Délai avant que « Confirmer ? » ne redevienne « Recommencer ». */
const CONFIRM_TIMEOUT_MS = 4000;

@Component({
  selector: 'app-composer-topbar',
  standalone: true,
  imports: [RouterLink, AccentPicker],
  templateUrl: './composer-topbar.html',
  styleUrl: './composer-topbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposerTopbar implements OnDestroy {
  @Input() projectName = 'Nouveau projet';

  protected readonly store = inject(ComposerStore);
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  /**
   * « Recommencer » efface tout le travail en cours : on demande confirmation
   * en deux temps sur le bouton lui-même, plutôt qu'avec un `confirm()`.
   */
  protected readonly confirmingReset = signal(false);
  private confirmTimer?: ReturnType<typeof setTimeout>;

  @HostBinding('style.--accent') get accentColor() {
    return this.store.accent().default;
  }

  protected goBack(): void {
    this.location.back();
  }

  protected askReset(): void {
    if (this.confirmingReset()) {
      this.cancelConfirm();
      this.store.reset();
      // L'étape courante peut ne plus exister après la remise à zéro.
      this.router.navigate(['/composer/navbar']);
      return;
    }
    this.confirmingReset.set(true);
    this.confirmTimer = setTimeout(() => this.confirmingReset.set(false), CONFIRM_TIMEOUT_MS);
  }

  protected savedAtLabel(savedAt: Date): string {
    return `Dernière sauvegarde locale à ${savedAt.toLocaleTimeString()}`;
  }

  private cancelConfirm(): void {
    clearTimeout(this.confirmTimer);
    this.confirmingReset.set(false);
  }

  ngOnDestroy(): void {
    clearTimeout(this.confirmTimer);
  }
}
