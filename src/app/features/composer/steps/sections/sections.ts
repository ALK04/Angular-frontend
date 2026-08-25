import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ComposerStore } from '../../composer.store';
import { ComposerTopbar } from '../../components/composer-topbar/composer-topbar';
import { StepPill } from '../../components/step-pill/step-pill';
import { SECTION_CATALOG } from '../../data/section-catalog';

@Component({
  selector: 'app-sections',
  imports: [StepPill, ComposerTopbar],
  templateUrl: './sections.html',
  styleUrl: './sections.css',
})
export class Sections {
  protected readonly store = inject(ComposerStore);
  protected readonly router = inject(Router);
  protected readonly sanitizer = inject(DomSanitizer);
  protected readonly sections = SECTION_CATALOG;
  protected get steps() { return this.store.visibleSteps(); }
  protected get currentStepIndex() { return this.store.stepIndexFor('structure'); }
  protected get nextStepLabel() { return this.store.nextStepLabelAfter('sections'); }
  protected get eyebrow() {
    const n = this.store.stepIndexFor('structure') + 1;
    return `Étape ${String(n).padStart(2, '0')} · Structure`;
  }

  protected svgSafe(raw: string) {
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  protected get selectedCount(): number {
    return this.store.selectedSections().size;
  }

  protected continue(): void {
    if (this.store.canContinueSections()) {
      this.router.navigate([this.store.nextStepAfter('sections')]);
    }
  }
}
