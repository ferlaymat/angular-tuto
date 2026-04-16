import { Injectable } from '@angular/core';
import { Priority, Task } from '../model/Types';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  saveTasks(tasks: Task[], storage_key: string): void {
    try {
      const tasksJson = JSON.stringify(tasks);
      localStorage.setItem(storage_key, tasksJson);
    } catch (error) {
      console.error('Eror during data storage:', error);
    }
  }

  loadTasks(storage_key: string): Task[] {
    try {
      const tasksJson = localStorage.getItem(storage_key);
      if (!tasksJson) {
        return [];
      }

      const tasksData: any[] = JSON.parse(tasksJson);

      // Reload object
      return tasksData.map((data) => {
        const task = new Task(data.title, data.column, this.parsePriority(data.priority), data.id);
        return task;
      });
    } catch (error) {
      console.error('Error during reload from localStorage:', error);
      return [];
    }
  }

  private parsePriority(priority: string): Priority {
    if (priority === 'high' || priority === 'medium' || priority === 'low') {
      return priority;
    }
    return 'medium';
  }
}
