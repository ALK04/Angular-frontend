import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { PROCESS_VARIANTS } from '../../data/process-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-process-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './process-step.html',
  styleUrl: './process-step.css',
})
export class ProcessStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = PROCESS_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('process'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('process'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('process') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Processus`;
  }
  protected readonly previewHeight = 500;
  protected readonly modalHeight = 540;

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
    if (this.store.canContinueProcess()) {
      this.router.navigate([this.store.nextStepAfter('process')]);
    }
  }
}
