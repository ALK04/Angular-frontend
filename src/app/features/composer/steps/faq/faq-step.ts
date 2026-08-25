import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { FAQ_VARIANTS } from '../../data/faq-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-faq-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './faq-step.html',
  styleUrl: './faq-step.css',
})
export class FaqStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = FAQ_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('faq'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('faq'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('faq') + 1;
    return `Étape ${String(n).padStart(2, '0')} · FAQ`;
  }
  protected readonly previewHeight = 520;
  protected readonly modalHeight = 660;

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
    if (this.store.canContinueFaq()) {
      this.router.navigate([this.store.nextStepAfter('faq')]);
    }
  }
}
