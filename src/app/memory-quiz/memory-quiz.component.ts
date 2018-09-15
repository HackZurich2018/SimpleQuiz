import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-quiz',
  templateUrl: './memory-quiz.component.html',
  styleUrls: ['./memory-quiz.component.scss']
})
export class MemoryQuizComponent implements OnInit {
  private cards: Card[];
  public counter: number;
  constructor() {
    this.counter = 0;
  }

  private initCards(): Card[] {
    const cardElements = document.getElementsByClassName(
      'card'
    ) as HTMLCollectionOf<HTMLDivElement>;
    return Array.from(cardElements).map(el => new Card(el));
  }

  public increaseCounter() {
    this.counter += 1;
  }
  ngOnInit() {
    this.cards = this.initCards();
  }
}

class Card {
  constructor(private el: HTMLDivElement) {
    el.onclick = () => (this.isVisible ? this.hide() : this.reveal());
  }

  get isVisible() {
    return !this.el.classList.contains('card-hidden');
  }

  hide(): void {
    this.el.classList.add('card-hidden');
  }

  reveal(): void {
    this.el.classList.remove('card-hidden');
  }
}
