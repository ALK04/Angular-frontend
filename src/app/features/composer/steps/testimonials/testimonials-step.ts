import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { TESTIMONIALS_VARIANTS } from '../../data/testimonials-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-testimonials-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './testimonials-step.html',
  styleUrl: './testimonials-step.css',
})
export class TestimonialsStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = TESTIMONIALS_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('temoignages'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('testimonials'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('temoignages') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Témoignages`;
  }
  protected readonly previewHeight = 400;
  protected readonly modalHeight = 560;

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
    if (this.store.canContinueTestimonials()) {
      this.router.navigate([this.store.nextStepAfter('testimonials')]);
    }
  }
}
