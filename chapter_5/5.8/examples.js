let weak = new WeakMap();

function Usr(name) {
    this.name = name;
}

let obj1 = new Usr('steve');
let obj2 = new Usr('john');
let obj3 = new Usr('pte');

weak.set(obj1, true);
weak.set(obj2, false);
weak.set(obj3, true);

