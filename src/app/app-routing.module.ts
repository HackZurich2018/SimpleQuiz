import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MathQuizComponent } from './math-quiz/math-quiz.component';
import { SecondMathQuizComponent } from './second-math-quiz/second-math-quiz.component';
import { ThirdMathQuizComponent } from './third-math-quiz/third-math-quiz.component';
import { MemoryQuizComponent } from './memory-quiz/memory-quiz.component';
import { SentenceQuizComponent } from './sentence-quiz/sentence-quiz.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BlackScreenComponent } from './black-screen/black-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/mathQuiz', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'mathQuiz', component: MathQuizComponent },
  { path: 'secondMathQuiz', component: SecondMathQuizComponent },
  { path: 'thirdMathQuiz', component: ThirdMathQuizComponent },
  { path: 'sentenceQuiz', component: SentenceQuizComponent },
  { path: 'memoryQuiz', component: MemoryQuizComponent }
  { path: 'blackScreen', component: BlackScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
