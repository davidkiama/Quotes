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
      'Feb 2 2022'
    ),
    new Quote(
      2,
      'Shigeta',
      "Just because you're trash doesn't mean you cant do great things. It's called garbage can not garbage cannot",
      'Feb 2 2022'
    ),
    new Quote(
      3,
      'Beth',
      'Anything is possible when you sound caucasian on the phone',
      'Feb 2 2022'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
