import { Component, OnInit } from '@angular/core';
import {MathModel} from './MathModel';
import {ResultMathModel} from './ResultMathModel';

@Component({
  selector: 'app-math-quiz',
  templateUrl: './math-quiz.component.html',
  styleUrls: ['./math-quiz.component.css']
})
export class MathQuizComponent implements OnInit {

  constructor() { }

  model = new MathModel();
  resultModel = new ResultMathModel();

  ngOnInit() {
  }


  onSubmit() {
    if (this.model.simpleMathQuestion !== 2) {
      this.resultModel.simpleMathQuestionValid = false;
    }

    if (this.model.intermediateMathQuestion !== 100) {
      this.resultModel.intermediateMathQuestionValid = false;
    }

    if (this.model.advancedMathQuestion !== 10) {
      this.resultModel.advancedMathQuestionValid = false;
    }

  }
}
