import { Component, computed, signal } from '@angular/core';
import { CstButton } from '../cst-button/cst-button';
import { FormsModule } from '@angular/forms';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-home',
  imports: [CstButton, FormsModule, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  varBinding = 'binding';
  signalBinding = signal('binding');
  count = signal(3);
  firstName = 'Ada';
  initialCount = 18;

  ariaLabel = computed(() =>
    this.count() > 0 ? `${this.count()} notifications non lues` : `Aucune notification`,
  );
}
