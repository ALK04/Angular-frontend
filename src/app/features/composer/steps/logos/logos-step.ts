import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { LOGOS_VARIANTS } from '../../data/logos-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-logos-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './logos-step.html',
  styleUrl: './logos-step.css',
})
export class LogosStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = LOGOS_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('logos'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('logos'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('logos') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Logos / Presse`;
  }
  protected readonly previewHeight = 260;
  protected readonly modalHeight = 300;

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
    if (this.store.canContinueLogos()) {
      this.router.navigate([this.store.nextStepAfter('logos')]);
    }
  }
}
