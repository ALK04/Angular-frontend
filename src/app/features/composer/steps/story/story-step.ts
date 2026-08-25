import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { STORY_VARIANTS } from '../../data/story-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-story-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './story-step.html',
  styleUrl: './story-step.css',
})
export class StoryStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = STORY_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('story'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('story'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('story') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Histoire`;
  }
  protected readonly previewHeight = 440;
  protected readonly modalHeight = 480;

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
    if (this.store.canContinueStory()) {
      this.router.navigate([this.store.nextStepAfter('story')]);
    }
  }
}
