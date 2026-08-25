import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { FORMS_VARIANTS } from '../../data/forms-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-forms-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './forms-step.html',
  styleUrl: './forms-step.css',
})
export class FormsStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = FORMS_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('formulaires'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('forms'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('formulaires') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Formulaires`;
  }
  protected readonly previewHeight = 660;
  protected readonly modalHeight = 720;

  protected modalVariant: BrickVariant | null = null;

  protected openModal(variant: BrickVariant): void { this.modalVariant = variant; }
  protected closeModal(): void { this.modalVariant = null; }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.closeModal(); }

  protected continue(): void {
    if (this.store.canContinueForms()) {
      this.router.navigate([this.store.nextStepAfter('forms')]);
    }
  }
}
