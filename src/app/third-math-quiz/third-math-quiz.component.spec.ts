import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdMathQuizComponent } from './third-math-quiz.component';

describe('ThirdMathQuizComponent', () => {
  let component: ThirdMathQuizComponent;
  let fixture: ComponentFixture<ThirdMathQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdMathQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdMathQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
