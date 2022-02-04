import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {
      id: 1,
      author: 'Kate',
      quote: "I am going to stand outside. If anyone asks I'm outstanding ",
      date: 'Feb 2 2022',
    },
    {
      id: 2,
      author: 'Shigeta',
      quote:
        "Just because you're trash doesn't mean you cant do great things. It's called garbage can not garbage cannot",
      date: 'Feb 2 2022',
    },
    {
      id: 3,
      author: 'Beth',
      quote: 'Anything is possible when you sound caucasian on the phone',
      date: 'Feb 2 2022',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
