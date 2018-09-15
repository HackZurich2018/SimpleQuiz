import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MathQuizComponent} from './math-quiz/math-quiz.component';
import {MemoryQuizComponent} from './memory-quiz/memory-quiz.component';
import {SentenceQuizComponent} from './sentence-quiz/sentence-quiz.component';
import {DashBoardComponent} from './dash-board/dash-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'mathQuiz', component: MathQuizComponent },
  { path: 'sentenceQuiz', component: SentenceQuizComponent },
  { path: 'memoryQuiz', component: MemoryQuizComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
