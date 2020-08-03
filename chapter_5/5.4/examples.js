let arr1 = [];
let smth = ['lal', 'qq', 'pop',];

console.log(smth[0], smth[1]);

smth[3] = 'xxx';
smth[2] = 'yyy';

console.log(smth);
console.log(smth.length);

smth.pop();
smth.push('proe');

console.log(smth);

smth.shift();
console.log(smth);
smth.unshift('iiiiii');
console.log(smth);

for (let val of smth) {
    console.log(val);
}


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log(matrix[1][2]);
console.log(String(matrix));

