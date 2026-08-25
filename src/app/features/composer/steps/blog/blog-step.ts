import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { BLOG_VARIANTS } from '../../data/blog-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-blog-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './blog-step.html',
  styleUrl: './blog-step.css',
})
export class BlogStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = BLOG_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('articles'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('blog'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('articles') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Blog / Articles`;
  }
  protected readonly previewHeight = 480;
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
    if (this.store.canContinueBlog()) {
      this.router.navigate([this.store.nextStepAfter('blog')]);
    }
  }
}
