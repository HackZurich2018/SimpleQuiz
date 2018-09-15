import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMathQuizComponent } from './second-math-quiz.component';

describe('SecondMathQuizComponent', () => {
  let component: SecondMathQuizComponent;
  let fixture: ComponentFixture<SecondMathQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondMathQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMathQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
