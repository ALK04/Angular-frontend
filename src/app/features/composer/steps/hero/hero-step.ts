import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { HERO_VARIANTS } from '../../data/hero-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-hero-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './hero-step.html',
  styleUrl: './hero-step.css',
})
export class HeroStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = HERO_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('hero'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('hero'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('hero') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Hero`;
  }
  protected readonly previewHeight = 600;
  protected readonly modalHeight = 620;

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
    if (this.store.canContinueHero()) {
      this.router.navigate([this.store.nextStepAfter('hero')]);
    }
  }
}
