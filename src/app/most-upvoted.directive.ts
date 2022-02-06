import { Directive, ElementRef } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appMostUpvoted]',
})
export class MostUpvotedDirective {
  constructor(private elem: ElementRef) {}
}
