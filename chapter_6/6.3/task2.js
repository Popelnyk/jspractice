let inBetween = (a, b) => (x) => (x >= a && x <= b);
let inArray = (arr) => (x) => (arr.includes(x));

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );
console.log( arr.filter(inArray([1, 2, 10])));