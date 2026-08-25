import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { FEATURES_VARIANTS } from '../../data/features-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-features-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './features-step.html',
  styleUrl: './features-step.css',
})
export class FeaturesStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = FEATURES_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('fonctionnalites'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('features'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('fonctionnalites') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Fonctionnalités`;
  }
  protected readonly previewHeight = 420;
  protected readonly modalHeight = 620;

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
    if (this.store.canContinueFeatures()) {
      this.router.navigate([this.store.nextStepAfter('features')]);
    }
  }
}
