let num1 = 1e9;
let num2 = 7.3e5;
let num3 = 54e-5;

console.log(0xff, 0xabb54f);
console.log(0b1110101010111, 0b11111110111111111);
console.log(0o43423412521, 0o754666);

let num = 155;
console.log(num.toString(4), num.toString(16));
console.log(123455..toString(21));


//isNaN
//isFinite

console.log(isNaN(NaN));
console.log(isNaN('rf'));

console.log(isFinite('fw'));
console.log(isFinite(4));

console.log(NaN === NaN);


//object.is
console.log(Object.is(-0, 0));


//parseInt parseFloat
console.log(parseInt('12px'));
console.log(parseFloat('45.9em'));
console.log(parseFloat('14.4.7'));
console.log(parseInt('a4'));
console.log(parseInt('0xff', 16));
console.log(parseInt('fa', 16));

console.log(0.2 + 0.4 === 0.6);