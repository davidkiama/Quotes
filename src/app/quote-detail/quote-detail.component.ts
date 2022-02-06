import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
  }

  @ViewChild('up') upvoteEl: ElementRef;
  @ViewChild('down') downvoteEl: ElementRef;

  upvoteQuote() {
    this.upvoteEl.nativeElement.textContent =
      parseInt(this.upvoteEl.nativeElement.textContent) + 1;
  }

  downvoteQuote() {
    this.downvoteEl.nativeElement.textContent =
      parseInt(this.downvoteEl.nativeElement.textContent) + 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
