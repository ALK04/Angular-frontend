import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { STATS_VARIANTS } from '../../data/stats-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-stats-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './stats-step.html',
  styleUrl: './stats-step.css',
})
export class StatsStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = STATS_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('statistiques'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('stats'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('statistiques') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Statistiques`;
  }
  protected readonly previewHeight = 500;
  protected readonly modalHeight = 640;

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
    if (this.store.canContinueStats()) {
      this.router.navigate([this.store.nextStepAfter('stats')]);
    }
  }
}
