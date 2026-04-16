import { Component, computed, inject, signal } from '@angular/core';
import { Priority, Task } from '../../shared/model/Types';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TaskCard } from '../../taskcard/task-card/task-card';
import { HttpTaskService } from '../../shared/service/http-task-service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-board-dynamic',
  imports: [
    MatTableModule,
    TaskCard,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './board-dynamic.html',
  styleUrl: './board-dynamic.css',
})
export class BoardDynamic {
  protected readonly columnList = ['To-do', 'In progress', 'Done'];
  items = signal<Task[]>([]);

  protected readonly value = signal('');
  protected selectedPriority = signal<Priority>('medium');

  protected readonly httpService = inject(HttpTaskService);

  constructor() {
    this.httpService
      .getAllTask()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe((data) => {
        this.items.set(data);
      });
  }

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  //create a dynamic filter to avoid to iterate in full list on each column
  getTasksByColumn(column: string) {
    return computed(() => this.items().filter((t) => t.column === column));
  }

  //handle the move left event
  onTaskMoveLeft(task: Task) {
    const idx = this.columnList.indexOf(task.column);
    const newIdx = Math.max(0, Math.min(this.columnList.length - 1, idx - 1));
    task.column = this.columnList[newIdx];
    this.httpService
      .updateTask(task)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe();
  }

  //handle the move right event
  onTaskMoveRight(task: Task) {
    const idx = this.columnList.indexOf(task.column);
    const newIdx = Math.max(0, Math.min(this.columnList.length - 1, idx + 1));
    task.column = this.columnList[newIdx];
    this.httpService
      .updateTask(task)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe();
  }

  //handle the add event
  onTaskDelete(task: Task) {
    this.httpService
      .deleteTask(task.id)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe(() => {
        this.items.update((currentItems) => currentItems.filter((t) => t.id !== task.id));
      });
  }

  onSubmit() {
    let t = new Task(this.value(), 'To-do', this.selectedPriority());
    this.httpService
      .createTask(t)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      )
      .subscribe((data) => {
        this.items.update((values) => {
          return [...values, data];
        });
      });

    this.value.set('');
    this.selectedPriority.set('medium');
  }
}
