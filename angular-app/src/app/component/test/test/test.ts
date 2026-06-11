import { Component, ViewChild } from '@angular/core';
import { Timer } from '../timer/timer';
import { TestGrid } from '../test-grid/test-grid';

@Component({
  selector: 'app-test',
  imports: [Timer, TestGrid],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  isStarted: boolean = false;
  _isSubmitted: boolean = false;

  @ViewChild(Timer) timer!: Timer;

  set isSubmitted(value: boolean) {
    this._isSubmitted = value;
    if (value && this.timer) {
      this.timer.stop();
    }
  }

  get isSubmitted(): boolean {
    return this._isSubmitted;
  }
}
