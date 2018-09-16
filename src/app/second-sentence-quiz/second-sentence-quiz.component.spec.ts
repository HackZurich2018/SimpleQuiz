import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSentenceQuizComponent } from './second-sentence-quiz.component';

describe('SecondSentenceQuizComponent', () => {
  let component: SecondSentenceQuizComponent;
  let fixture: ComponentFixture<SecondSentenceQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSentenceQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSentenceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
