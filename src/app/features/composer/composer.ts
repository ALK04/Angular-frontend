import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composer',
  template: '',
})
export class Composer {
  constructor() {
    inject(Router).navigate(['/composer/navbar'], { replaceUrl: true });
  }
}
