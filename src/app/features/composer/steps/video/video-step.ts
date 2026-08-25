import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { VIDEO_VARIANTS } from '../../data/video-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-video-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './video-step.html',
  styleUrl: './video-step.css',
})
export class VideoStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = VIDEO_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('video'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('video'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('video') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Vidéo / Démo`;
  }
  protected readonly previewHeight = 680;
  protected readonly modalHeight = 720;

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
    if (this.store.canContinueVideo()) {
      this.router.navigate([this.store.nextStepAfter('video')]);
    }
  }
}
