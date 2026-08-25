import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ComposerStore } from '../../composer.store';
import { ACCENT_PRESETS } from '../../data/accents';

@Component({
  selector: 'app-accent-picker',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="picker" role="group" aria-label="Couleur d'accent">
      <div class="picker-label">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="4.1" cy="5.2" r="1" fill="currentColor"/>
          <circle cx="7.9" cy="5.2" r="1" fill="currentColor"/>
          <circle cx="6"   cy="8"   r="1" fill="currentColor"/>
        </svg>
        Couleur d'accent
        <span class="picker-tooltip" aria-hidden="true">
          Cliquez sur une couleur pour recolorer l'aperçu en temps réel&nbsp;!
          <span class="picker-tooltip-arrow"></span>
        </span>
      </div>
      @for (a of accents; track a.id) {
        <button
          type="button"
          class="swatch"
          [class.is-on]="store.accent().id === a.id"
          [style.--c]="a.default"
          [title]="a.name"
          [attr.aria-label]="a.name"
          [attr.aria-pressed]="store.accent().id === a.id"
          (click)="store.setAccent(a)"
        ></button>
      }
    </div>
  `,
  styles: [`
    :host { display: contents; }

    .picker {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* ── Label chip ── */
    .picker-label {
      position: relative;
      display: flex;
      align-items: center;
      gap: 5px;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.04em;
      color: rgba(255,255,255,0.6);
      padding: 3px 9px 3px 7px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      cursor: default;
      white-space: nowrap;
      transition: color 0.15s, border-color 0.15s, background 0.15s;
      animation: chip-attract 2.5s ease-out 0.6s both;
    }

    .picker-label:hover {
      color: rgba(255,255,255,0.9);
      border-color: rgba(91,61,245,0.55);
      background: rgba(91,61,245,0.1);
    }

    /* Initial pulse to catch the eye */
    @keyframes chip-attract {
      0%   { border-color: rgba(255,255,255,0.12); }
      35%  { border-color: rgba(91,61,245,0.7); background: rgba(91,61,245,0.14); color: rgba(255,255,255,0.9); }
      100% { border-color: rgba(255,255,255,0.12); }
    }

    /* ── Tooltip bubble ── */
    .picker-tooltip {
      position: absolute;
      top: calc(100% + 10px);
      right: -8px;
      padding: 7px 12px;
      background: rgba(15,13,26,0.97);
      border: 1px solid rgba(91,61,245,0.45);
      border-radius: 10px;
      font-family: var(--font-mono);
      font-size: 0.67rem;
      color: rgba(255,255,255,0.82);
      white-space: nowrap;
      pointer-events: none;
      z-index: 200;
      /* Hidden by default, visible on hover + intro animation */
      opacity: 0;
      transform: translateY(-3px);
      transition: opacity 0.18s, transform 0.18s;
    }

    .picker-tooltip-arrow {
      position: absolute;
      bottom: 100%;
      right: 20px;
      border: 5px solid transparent;
      border-bottom-color: rgba(91,61,245,0.45);
      display: block;
    }

    .picker-label:hover .picker-tooltip {
      opacity: 1;
      transform: translateY(0);
    }

    /* Auto-show tooltip briefly on first render */
    .picker-tooltip {
      animation: tooltip-intro 4s ease-out 0.8s both;
    }

    @keyframes tooltip-intro {
      0%        { opacity: 0; transform: translateY(-3px); }
      12%, 75%  { opacity: 1; transform: translateY(0); }
      100%      { opacity: 0; transform: translateY(-3px); }
    }

    /* On hover, override animation so tooltip stays visible */
    .picker-label:hover .picker-tooltip {
      animation: none;
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Swatches ── */
    .swatch {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 0;
      padding: 0;
      cursor: pointer;
      background: var(--c);
      box-shadow: 0 0 0 1.5px rgba(255,255,255,0.18);
      transition: transform 0.12s, box-shadow 0.12s;
      flex-shrink: 0;
    }

    .swatch:hover { transform: scale(1.25); }

    .swatch.is-on {
      box-shadow: 0 0 0 2px #0f0d1a, 0 0 0 4px var(--c), 0 0 0 5px rgba(255,255,255,0.2);
      transform: scale(1.1);
    }
  `],
})
export class AccentPicker {
  protected readonly store = inject(ComposerStore);
  protected readonly accents = ACCENT_PRESETS;
}
