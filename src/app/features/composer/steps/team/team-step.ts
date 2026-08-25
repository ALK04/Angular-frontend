import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { TEAM_VARIANTS } from '../../data/team-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-team-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './team-step.html',
  styleUrl: './team-step.css',
})
export class TeamStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = TEAM_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('team'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('team'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('team') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Équipe`;
  }
  protected readonly previewHeight = 460;
  protected readonly modalHeight = 500;

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
    if (this.store.canContinueTeam()) {
      this.router.navigate([this.store.nextStepAfter('team')]);
    }
  }
}
