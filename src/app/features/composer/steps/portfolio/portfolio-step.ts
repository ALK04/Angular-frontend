import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { PORTFOLIO_VARIANTS } from '../../data/portfolio-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-portfolio-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './portfolio-step.html',
  styleUrl: './portfolio-step.css',
})
export class PortfolioStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = PORTFOLIO_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('portfolio'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('portfolio'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('portfolio') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Portfolio`;
  }
  protected readonly previewHeight = 720;
  protected readonly modalHeight = 760;

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
    if (this.store.canContinuePortfolio()) {
      this.router.navigate([this.store.nextStepAfter('portfolio')]);
    }
  }
}
