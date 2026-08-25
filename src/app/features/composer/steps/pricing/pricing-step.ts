import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { PRICING_VARIANTS } from '../../data/pricing-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-pricing-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './pricing-step.html',
  styleUrl: './pricing-step.css',
})
export class PricingStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = PRICING_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('tarifs'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('pricing'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('tarifs') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Tarifs`;
  }
  protected readonly previewHeight = 520;
  protected readonly modalHeight = 680;

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
    if (this.store.canContinuePricing()) {
      this.router.navigate([this.store.nextStepAfter('pricing')]);
    }
  }
}
