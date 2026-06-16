import { Component, model, OnInit, signal } from '@angular/core';
import quizDataList from '@assets/angular-junior-quiz.json';
import { QuestionResult, QuizCategory, QuizQuestionWithCategory } from '../../shared/model/Types';
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
  choiceMap = new Map<number, string>();
  answerList: QuestionResult[] = [];
  result = 0;
  allQuestions: QuizQuestionWithCategory[] = [];

  ngOnInit(): void {
    this.reset();
    this.initTest();
  }

  initTest() {
    this.allQuestions = quizDataList.flatMap((cat: QuizCategory) =>
      cat.questionList.map((q) => ({
        ...q,
        category: cat.category,
        flag: signal(false),
      })),
    );

    const shuffled = this.allQuestions.sort(() => Math.random() - 0.5);
    this.selectedQuestions = shuffled
      .slice(0, 50)
      .sort((a, b) => a.category.localeCompare(b.category));
  }

  submit() {
    this.isSubmitted.set(true);

    for (let q of this.selectedQuestions) {
      console.log('q:', q);
      console.log('choice:', this.choiceMap.get(q.id));
      console.log('answer:', q.answer);
      if (this.choiceMap.get(q.id) === q.answer) {
        this.result++;
        this.answerList.push({
          correct: true,
          question: q.question,
          answer: q.choices.find((choice) => choice.id === q.answer)?.text!,
        });
      } else {
        this.answerList.push({
          correct: false,
          question: q.question,
          answer: q.choices.find((choice) => choice.id === q.answer)?.text!,
        });
      }
    }
    this.selectedQuestions = [];
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

  choose(qId: number, cid: string) {
    this.choiceMap.set(qId, cid);
  }

  reset() {
    this.choiceMap.clear();
    this.answerList = [];
    this.result = 0;
    this.currentIndex = 0;
    this.isSubmitted.set(false);
  }
}
