export type Priority = 'high' | 'medium' | 'low';

export class Task {
  id: number;
  title: string;
  column: string;
  priority: Priority;

  constructor(title: string, column: string, priority: Priority, id: number);
  constructor(title: string, column: string, priority: Priority);
  constructor(title: string, column: string, priority: Priority, id?: number) {
    this.id = id ?? Date.now();
    this.title = title;
    this.column = column;
    this.priority = priority;
  }
}
