import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes: Quote[] = [
    {
      id: 1,
      author: 'Kate',
      quote: "I am going to stand outside.If anyone asks I'm outstanding ",
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
      quote: 'Anything possible when you sound caucasian on the phone',
      date: 'Feb 2 2022',
    },
  ];
}
