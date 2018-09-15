import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MathQuizComponent } from './math-quiz/math-quiz.component';
import { MemoryQuizComponent } from './memory-quiz/memory-quiz.component';
import { SentenceQuizComponent } from './sentence-quiz/sentence-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    MathQuizComponent,
    MemoryQuizComponent,
    SentenceQuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
