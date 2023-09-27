class Pile {
    constructor(element) {
        this.element = element;
        this.list = [element];
    }
    empiler(arg) {
        this.list.push(arg);
        console.log(this.list);
    }
    depiler() {
        this.list.pop();
        console.log(this.list);
    }
}
let pile = new Pile(1);
pile.empiler(1);
pile.empiler(3);
