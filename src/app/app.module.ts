import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MathQuizComponent } from './math-quiz/math-quiz.component';
import { MemoryQuizComponent } from './memory-quiz/memory-quiz.component';
import { SentenceQuizComponent } from './sentence-quiz/sentence-quiz.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BlackScreenComponent } from './black-screen/black-screen.component';
import { ThirdMathQuizComponent } from './third-math-quiz/third-math-quiz.component';
import { SecondMathQuizComponent } from './second-math-quiz/second-math-quiz.component';
import { SecondSentenceQuizComponent } from './second-sentence-quiz/second-sentence-quiz.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    MathQuizComponent,
    MemoryQuizComponent,
    SentenceQuizComponent,
    DashBoardComponent,
    BlackScreenComponent,
    ThirdMathQuizComponent,
    SecondMathQuizComponent,
    SecondSentenceQuizComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
