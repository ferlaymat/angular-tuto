import { Component, computed, signal } from '@angular/core';
import { Task } from '../../shared/model/Types';
import { MatTableModule } from '@angular/material/table';
import { TaskCard } from '../../taskcard/task-card/task-card';

@Component({
  selector: 'app-board',
  imports: [MatTableModule, TaskCard],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {
  //fake data to initialize the board
  protected readonly columnList = ['To-do', 'In progress', 'Done'];
  items = signal<Task[]>([
    { id: 1, title: 'Create structure', column: 'Done', priority: 'high' },
    { id: 2, title: 'Add state', column: 'In progress', priority: 'high' },
    { id: 3, title: 'Connect API', column: 'To-do', priority: 'medium' },
  ]);

  //create a dynamic filter to avoid to iterate in full list on each column
  getTasksByColumn(column: string) {
    return computed(() => this.items().filter((t) => t.column === column));
  }

  //handle the move left event
  onTaskMoveLeft(task: Task) {
    const idx = this.columnList.indexOf(task.column);
    const newIdx = Math.max(0, Math.min(this.columnList.length - 1, idx - 1));
    task.column = this.columnList[newIdx];
  }

  //handle the move right event
  onTaskMoveRight(task: Task) {
    const idx = this.columnList.indexOf(task.column);
    const newIdx = Math.max(0, Math.min(this.columnList.length - 1, idx + 1));
    task.column = this.columnList[newIdx];
  }

  //handle the add event
  onTaskDelete(task: Task) {
    this.items.update((currentItems) => currentItems.filter((t) => t.id !== task.id));
  }
}
