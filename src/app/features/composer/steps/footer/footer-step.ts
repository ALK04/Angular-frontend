import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { FOOTER_VARIANTS } from '../../data/footer-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-footer-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './footer-step.html',
  styleUrl: './footer-step.css',
})
export class FooterStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = FOOTER_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('footer'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('footer'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('footer') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Footer`;
  }
  protected readonly previewHeight = 340;
  protected readonly modalHeight = 440;

  protected modalVariant: BrickVariant | null = null;

  protected openModal(variant: BrickVariant): void { this.modalVariant = variant; }
  protected closeModal(): void { this.modalVariant = null; }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.closeModal(); }

  protected continue(): void {
    if (this.store.canContinueFooter()) {
      this.router.navigate([this.store.nextStepAfter('footer')]);
    }
  }
}
