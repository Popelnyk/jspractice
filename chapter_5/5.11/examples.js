let now = new Date();
console.log(now);

let jan01_1970 = new Date(0);
let jan02_1970 = new Date(24 * 3600 * 1000);

console.log(jan02_1970);

let date1 = new Date('2017-01-26');
console.log(date1);

console.log(new Date(2011, 0, 1));
console.log(new Date(2015, 11));

////
let date2 = new Date();
console.log(`\n${date2}`);
console.log(date2);

date2.setHours(14);
console.log(date2.toString());

console.log(now.getTime());
console.log(+now);