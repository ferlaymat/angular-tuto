import { Component, computed, model, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  totalSecondes = signal(2400);
  minutes = computed(() => Math.floor(this.totalSecondes() / 60));
  secondes = computed(() => this.totalSecondes() - this.minutes() * 60);
  isStarted = model(false);
  private _timer: any;

  start() {
    this._timer = setInterval(() => {
      this.totalSecondes.update((ts) => ts - 1);
    }, 1000);
    this.isStarted.set(true);
  }

  stop() {
    clearInterval(this._timer);
  }
  reset() {
    this.totalSecondes.set(2400);
    this.isStarted.set(false);
  }
}
