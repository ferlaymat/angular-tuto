import { Component } from '@angular/core';

@Component({
  //here we say that each button with cst-button attribute will this behavior
  //we inherit to all capabilities of a standard button without reimplement all of them
  selector: 'button[cst-button]',
  imports: [],
  template: `
    <span class="icon">⭐</span>
    <ng-content />
  `,
  styles: [
    `
      :host {
        background: gold;
        border-radius: 8px;
        padding: 8px 16px;
      }
    `,
  ],
})
export class CstButton {}
