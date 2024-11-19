import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

interface Question {
  image: string;
  options: { label: string; value: string }[];
  correctAnswer: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public questions: Question[] = [];
  public currentQuestion:number = 0;
  public selectedAnswer: string = '';
  public isAnswered:boolean = false;
  public score:number = 0
  public quizCompleted = false;
  public passed = false;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

  checkAnswer() {
    this.isAnswered = true;
    if (this.selectedAnswer === this.questions[this.currentQuestion].correctAnswer) {
      this.score += 10;
    }
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.selectedAnswer = '';
      this.isAnswered = false;
    } else {
      this.quizCompleted = true;
      this.passed = this.score >= 70;
    }
  }

  closeModal() {
    this.quizCompleted = false;
    this.currentQuestion = 0;
    this.selectedAnswer = '';
    this.isAnswered = false;
    this.score = 0;
    this.passed = false;
  }


}
