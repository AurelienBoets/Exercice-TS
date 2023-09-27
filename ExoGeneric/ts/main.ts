class Pile<T> {
  public list: T[];
  constructor(public element: T) {
    this.list = [element];
  }
  empiler(arg: T): void {
    this.list.push(arg);
    console.log(this.list);
  }
  depiler(): void {
    this.list.pop();
    console.log(this.list);
  }
}

let pile = new Pile(1);

pile.empiler(1);
pile.empiler(3);
