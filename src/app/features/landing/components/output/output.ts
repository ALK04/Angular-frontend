import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-output',
  imports: [Reveal],
  templateUrl: './output.html',
  styleUrl: './output.css',
})
export class Output {}
