import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-pill',
  imports: [],
  templateUrl: './step-pill.html',
  styleUrl: './step-pill.css',
})
export class StepPill {
  @Input() steps: { id: string; label: string }[] = [];
  @Input() currentIndex: number = 0;

  get totalSteps(): number { return this.steps.length; }
  get currentLabel(): string { return this.steps[this.currentIndex]?.label ?? ''; }
  get stepLabel(): string { return `Étape ${String(this.currentIndex + 1).padStart(2, '0')}`; }
  get progress(): number {
    if (this.totalSteps <= 1) return 100;
    return ((this.currentIndex + 1) / this.totalSteps) * 100;
  }
}
