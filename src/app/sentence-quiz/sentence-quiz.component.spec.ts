import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceQuizComponent } from './sentence-quiz.component';

describe('SentenceQuizComponent', () => {
  let component: SentenceQuizComponent;
  let fixture: ComponentFixture<SentenceQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
