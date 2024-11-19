import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions = [
    {
      image: '../../../assets/ai-generated-cute-lion-cartoon-transparent-background-free.png',
      options: [
        { label: 'Lion 🦁', value: 'value-1' },
        { label: 'Tiger 🐯', value: 'value-2' },
        { label: 'Fox 🦊', value: 'value-3' }
      ],
      correctAnswer: 'value-1'
    },
    {
      image: '../../../assets/ai-generated-cute-chibi-tiger-cartoon-tiger-character-free-png.png',
      options: [
        { label: 'Lion 🦁', value: 'value-1' },
        { label: 'Tiger 🐯', value: 'value-2' },
        { label: 'Fox 🦊', value: 'value-3' }
      ],
      correctAnswer: 'value-2'
    },
    {
      image: '../../../assets/cute-panda.png',
      options: [
        { label: 'Koala 🐨', value: 'value-1' },
        { label: 'Panda 🐼', value: 'value-2' },
        { label: 'Bear 🐻', value: 'value-3' }
      ],
      correctAnswer: 'value-2'
    },
    {
      image: '../../../assets/ai-generated-cute-elephant.png',
      options: [
        { label: 'Elephant 🐘', value: 'value-1' },
        { label: 'Hippo 🦛', value: 'value-2' },
        { label: 'Rhino 🦏', value: 'value-3' }
      ],
      correctAnswer: 'value-1'
    },
    {
      image: '../../../assets/ai-generated-cute-koala.png',
      options: [
        { label: 'Monkey 🐒', value: 'value-1' },
        { label: 'Koala 🐨', value: 'value-2' },
        { label: 'Panda 🐼', value: 'value-3' }
      ],
      correctAnswer: 'value-2'
    },
    {
      image: '../../../assets/ai-generated-cute-fox.png',
      options: [
        { label: 'Fox 🦊', value: 'value-1' },
        { label: 'Wolf 🐺', value: 'value-2' },
        { label: 'Cat 🐱', value: 'value-3' }
      ],
      correctAnswer: 'value-1'
    },
    {
      image: '../../../assets/ai-generated-cute-rabbit.png',
      options: [
        { label: 'Rabbit 🐰', value: 'value-1' },
        { label: 'Squirrel 🐿️', value: 'value-2' },
        { label: 'Hamster 🐹', value: 'value-3' }
      ],
      correctAnswer: 'value-1'
    },
    {
      image: '../../../assets/ai-generated-cute-duck.png',
      options: [
        { label: 'Chicken 🐔', value: 'value-1' },
        { label: 'Goose 🦢', value: 'value-2' },
        { label: 'Duck 🦆', value: 'value-3' }
      ],
      correctAnswer: 'value-3'
    },
    {
      image: '../../../assets/ai-generated-cute-cat.png',
      options: [
        { label: 'Dog 🐶', value: 'value-1' },
        { label: 'Cat 🐱', value: 'value-2' },
        { label: 'Fox 🦊', value: 'value-3' }
      ],
      correctAnswer: 'value-2'
    },
    {
      image: '../../../assets/ai-generated-cute-dog.png',
      options: [
        { label: 'Fox 🦊', value: 'value-1' },
        { label: 'Wolf 🐺', value: 'value-2' },
        { label: 'Dog 🐶', value: 'value-3' }
      ],
      correctAnswer: 'value-3'
    }
  ];

  getQuestions() {
    return this.questions;
  }
}
