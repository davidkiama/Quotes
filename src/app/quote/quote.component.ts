import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Kate',
      "I am going to stand outside. If anyone asks I'm outstanding ",
      new Date(2022, 1, 1)
    ),
    new Quote(
      2,
      'Shigeta',
      "Just because you're trash doesn't mean you cant do great things. It's called garbage can not garbage cannot",
      new Date(2022, 1, 5)
    ),
    new Quote(
      3,
      'Beth',
      'Anything is possible when you sound caucasian on the phone',
      new Date(2022, 1, 1)
    ),
  ];

  toggleQuote(index: number) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isDelete: any, index: any) {
    if (isDelete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
