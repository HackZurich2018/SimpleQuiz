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

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    MathQuizComponent,
    MemoryQuizComponent,
    SentenceQuizComponent,
    DashBoardComponent,
    BlackScreenComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
