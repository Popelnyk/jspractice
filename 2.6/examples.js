// to string
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

// to number
console.log('6' / '2');
console.log('6 / 2');

console.log(Number(''));

let str = 123;
console.log(typeof str);

let num = Number(str);
console.log(typeof num);

let errorAge = 'jf32434f';
let parsedAge = Number(errorAge);
console.log(parsedAge);

// --------if + and string is -- string is output
console.log(typeof (3 + 5 + 6 + 7 + 1 + '3'));

console.log('1' + 2 + 3 + 4 + 5 + 6);

// -------string
console.log(typeof (3 / 5 + 6 + 7 + 1 + '3'));

// -------number !
console.log(typeof (3 + 5 + 6 + 7 + 1 + '3' / 3));


// to boolean

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('hell'));
console.log(Boolean(''));
//!!!!!!!!! -- true
console.log(Boolean('0'));