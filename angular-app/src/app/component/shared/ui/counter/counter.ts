import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <button (click)="updateCount(-1)">-</button>
    <span>{{ count() }}</span>
    <button (click)="updateCount(+1)">+</button>
  `,
})
export class Counter {
  //model is a shared signal() which can be used outside the component
  //signal is internal
  //input is a model in readonly mode for the children.
  count = model<number>(0);
  updateCount(amount: number): void {
    this.count.update((currentCount) => currentCount + amount);
  }
}
