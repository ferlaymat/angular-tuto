import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signal-samples',
  imports: [],
  templateUrl: './signal-samples.html',
  styleUrl: './signal-samples.css',
})
export class SignalSamples {
  count = signal(0);
  doubleCount = computed(() => this.count() * this.count());
  count2 = signal(0);

  updateCount(amount: number, countId: number): void {
    if (countId === 2) {
      this.count2.update((currentCount) => currentCount + amount);
    } else {
      this.count.update((currentCount) => currentCount + amount);
    }
  }
  constructor() {
    effect(() => {
      //the effect is called when count changes
      console.log(`the count is ${this.count()}`);
      //the effect is not called when count2 changes
      console.log(`the count2 is ${untracked(() => this.count2())}`);
    });
  }
}
