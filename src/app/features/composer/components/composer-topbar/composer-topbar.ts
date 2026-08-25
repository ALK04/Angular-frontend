import { ChangeDetectionStrategy, Component, HostBinding, inject, Input } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ComposerStore } from '../../composer.store';
import { AccentPicker } from '../accent-picker/accent-picker';

@Component({
  selector: 'app-composer-topbar',
  standalone: true,
  imports: [RouterLink, AccentPicker],
  templateUrl: './composer-topbar.html',
  styleUrl: './composer-topbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposerTopbar {
  @Input() projectName = 'Nouveau projet';

  protected readonly store = inject(ComposerStore);
  private readonly location = inject(Location);

  @HostBinding('style.--accent') get accentColor() {
    return this.store.accent().default;
  }

  protected goBack(): void {
    this.location.back();
  }
}
