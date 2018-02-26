import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="">Home</a> |
      <a routerLink="items/4">Item #4</a> |
      <a routerLink="items/26">Item #26</a> |
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
