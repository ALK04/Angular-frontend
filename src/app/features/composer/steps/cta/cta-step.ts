import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { CTA_VARIANTS } from '../../data/cta-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-cta-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './cta-step.html',
  styleUrl: './cta-step.css',
})
export class CtaStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = CTA_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('cta'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('cta'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('cta') + 1;
    return `Étape ${String(n).padStart(2, '0')} · CTA`;
  }
  protected readonly previewHeight = 300;
  protected readonly modalHeight = 400;

  protected modalVariant: BrickVariant | null = null;

  protected openModal(variant: BrickVariant): void {
    this.modalVariant = variant;
  }

  protected closeModal(): void {
    this.modalVariant = null;
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeModal();
  }

  protected continue(): void {
    if (this.store.canContinueCta()) {
      this.router.navigate([this.store.nextStepAfter('cta')]);
    }
  }
}
