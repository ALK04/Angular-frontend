import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { CONTACT_VARIANTS } from '../../data/contact-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-contact-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './contact-step.html',
  styleUrl: './contact-step.css',
})
export class ContactStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = CONTACT_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('contact'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('contact'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('contact') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Contact`;
  }
  protected readonly previewHeight = 560;
  protected readonly modalHeight = 700;

  protected modalVariant: BrickVariant | null = null;

  protected openModal(variant: BrickVariant): void { this.modalVariant = variant; }
  protected closeModal(): void { this.modalVariant = null; }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.closeModal(); }

  protected continue(): void {
    if (this.store.canContinueContact()) {
      this.router.navigate([this.store.nextStepAfter('contact')]);
    }
  }
}
