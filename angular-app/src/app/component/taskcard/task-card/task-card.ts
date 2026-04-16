import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../shared/model/Types';

@Component({
  selector: 'app-task-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  //need a input definition provide the parent component
  task = input.required<Task>();

  //notify the parent that an action was requested for the component
  moveLeft = output<void>();
  moveRight = output<void>();
  delete = output<void>();
  onMoveLeft() {
    this.moveLeft.emit();
  }

  onMoveRight() {
    this.moveRight.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
