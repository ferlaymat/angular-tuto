import { WritableSignal } from '@angular/core';

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

export interface DataSource<T> {
  load(): Promise<T>;
}

export interface QuizChoice {
  id: string; // 'a', 'b', 'c', 'd'
  text: string; // answer's text
}

export interface QuizQuestion {
  id: number;
  question: string;
  choices: QuizChoice[];
  answer: string;
}

export interface QuizQuestionWithCategory extends QuizQuestion {
  category: string;
  flag: WritableSignal<boolean>;
}

export interface QuizCategory {
  category: string;
  questionList: QuizQuestion[];
}

// full type
export type QuizData = QuizCategory[];
