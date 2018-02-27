import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="">Home</a> |
      <a routerLink="vendor/4">Vendor #4</a> |
      <a routerLink="vendor/26">Vendor #26</a> |
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
