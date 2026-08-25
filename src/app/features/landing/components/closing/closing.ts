import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-closing',
  imports: [RouterLink, Reveal],
  templateUrl: './closing.html',
  styleUrl: './closing.css',
})
export class Closing {}
