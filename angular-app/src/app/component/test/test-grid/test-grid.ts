import { Component, model, OnInit, signal } from '@angular/core';
import quizDataList from '@assets/angular-junior-quiz.json';
import { QuizCategory, QuizQuestionWithCategory } from '../../shared/model/Types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-test-grid',
  imports: [NgClass],
  templateUrl: './test-grid.html',
  styleUrl: './test-grid.css',
})
export class TestGrid implements OnInit {
  isSubmitted = model(false);
  currentIndex = 0;
  selectedQuestions: QuizQuestionWithCategory[] = [];
  allQuestions: QuizQuestionWithCategory[] = quizDataList.flatMap((cat: QuizCategory) =>
    cat.questionList.map((q) => ({
      ...q,
      category: cat.category,
      flag: signal(false),
    })),
  );

  ngOnInit(): void {
    this.initTest();
  }

  initTest() {
    const shuffled = this.allQuestions.sort(() => Math.random() - 0.5);
    this.selectedQuestions = shuffled
      .slice(0, 50)
      .sort((a, b) => a.category.localeCompare(b.category));
  }

  submit() {
    this.isSubmitted.set(true);
  }

  get currentQuestion(): QuizQuestionWithCategory | undefined {
    return this.selectedQuestions[this.currentIndex];
  }

  next() {
    if (this.currentIndex < this.selectedQuestions.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  flagQuestion(idx: number) {
    this.selectedQuestions[this.currentIndex].flag.update((v) => !v);
  }
}
