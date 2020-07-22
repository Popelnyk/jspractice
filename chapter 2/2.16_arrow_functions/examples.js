let sum = (a, b) => a + b;
console.log(sum(4, 6));

let double = n => n * 2;
console.log(double(6));

let sayHi = () => alert('f');

let foo = () => () => (x) => x**x;
console.log(foo()()(5));