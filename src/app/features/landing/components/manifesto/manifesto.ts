import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-manifesto',
  imports: [Reveal],
  templateUrl: './manifesto.html',
  styleUrl: './manifesto.css',
})
export class Manifesto {}
