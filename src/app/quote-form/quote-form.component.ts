import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  author = '';
  quote = '';
  newQuote = new Quote(0, this.author, this.quote, new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.newQuote.author = this.author;
    this.newQuote.quote = this.quote;

    this.addQuote.emit(this.newQuote);
  }

  constructor() {}

  ngOnInit(): void {}
}
