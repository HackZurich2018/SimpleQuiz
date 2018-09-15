import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryQuizComponent } from './memory-quiz.component';

describe('MemoryQuizComponent', () => {
  let component: MemoryQuizComponent;
  let fixture: ComponentFixture<MemoryQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
