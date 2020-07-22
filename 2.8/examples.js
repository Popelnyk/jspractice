let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

//!!!!!!!!!!!
console.log(+undefined);
console.log(+null);

console.log('2' === 2);



let variable = '2';

if(typeof variable === 'string')
    variable = +variable;

console.log(undefined == null);
console.log(undefined === null);