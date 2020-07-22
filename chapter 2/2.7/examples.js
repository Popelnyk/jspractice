//binary plus

let s = 'x str' + 'y str';
console.log(s);

console.log('1' + 2);
console.log(1 + '2');
console.log(1 + 2 + 3 + '4');
console.log('1' + 2 + 3 + 4);
console.log(2 - '1');
console.log('6' / '2');


//unary plus

let x = 1;
console.log(+x);

let y = -2;
console.log(+y);

console.log(+true);
console.log(+'');

let apples = '2';
let oranges = '3';

console.log(+apples + +oranges);
///

let a, b, c;
a = b = c = 2 + 2;

console.log(a, b, c);

console.log(5 % 2);

console.log(2 ** 4);
console.log(2 ** (1/2));

let counter = 1;
console.log(2 * ++counter);
console.log(2 * counter++);

//«одна строка – одно действие»:
console.log(2 * counter);
counter++;
