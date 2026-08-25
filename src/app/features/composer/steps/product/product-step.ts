import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { PRODUCT_VARIANTS } from '../../data/product-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-product-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './product-step.html',
  styleUrl: './product-step.css',
})
export class ProductStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = PRODUCT_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('product'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('product'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('product') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Fiche produit`;
  }
  protected readonly previewHeight = 560;
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
    if (this.store.canContinueProduct()) {
      this.router.navigate([this.store.nextStepAfter('product')]);
    }
  }
}
