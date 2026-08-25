import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { QUOTE_VARIANTS } from '../../data/quote-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-quote-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './quote-step.html',
  styleUrl: './quote-step.css',
})
export class QuoteStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = QUOTE_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('quote'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('quote'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('quote') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Citation`;
  }
  protected readonly previewHeight = 360;
  protected readonly modalHeight = 420;

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
    if (this.store.canContinueQuote()) {
      this.router.navigate([this.store.nextStepAfter('quote')]);
    }
  }
}
