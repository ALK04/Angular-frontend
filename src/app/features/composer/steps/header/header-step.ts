import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { HEADER_VARIANTS } from '../../data/header-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-header-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './header-step.html',
  styleUrl: './header-step.css',
})
export class HeaderStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = HEADER_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('header'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('header'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('header') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Header de page`;
  }
  protected readonly previewHeight = 360;
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
    if (this.store.canContinueHeader()) {
      this.router.navigate([this.store.nextStepAfter('header')]);
    }
  }
}
