import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrickPreview } from '../../components/brick-preview/brick-preview';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { NAVBAR_VARIANTS } from '../../data/navbar-variants';
import { BrickVariant } from '../../../../models/brick-variant.model';

@Component({
  selector: 'app-navbar-step',
  imports: [BrickPreview, StepPill, ComposerTopbar],
  templateUrl: './navbar-step.html',
  styleUrl: './navbar-step.css',
})
export class NavbarStep {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly variants = NAVBAR_VARIANTS;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('navbar'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('navbar') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Navbar`;
  }
  protected readonly previewHeight = 160;
  protected readonly modalHeight = 120;

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
    if (this.store.canContinueNavbar()) {
      this.router.navigate(['/composer/sections']);
    }
  }
}
