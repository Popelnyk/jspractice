let sum = (a) => (b) => a + b;

console.log(sum(4)(6));

let sum2 = sum(4);
console.log(sum2(12));
