import { Component, model } from '@angular/core';

@Component({
  selector: 'app-test-grid',
  imports: [],
  templateUrl: './test-grid.html',
  styleUrl: './test-grid.css',
})
export class TestGrid {
  isSubmitted = model(false);
  submit() {
    this.isSubmitted.set(true);
  }
}
