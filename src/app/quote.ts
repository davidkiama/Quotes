export class Quote {
  showQuote: boolean;

  constructor(
    public id: number,
    public author: string,
    public quote: string,
    public date: Date,
    public upvote: number = 0,
    public downvote: number = 0
  ) {
    //
    this.showQuote = true;
  }
}
