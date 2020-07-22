console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || 0 || null);


let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || 'unnamed';
console.log(name);


let x = undefined;

console.log(true || (x = 1));
console.log(false || (x = 1));


let hour = 1, minute = 40;

if (hour === 1 && minute === 40) {
    console.log('time is 1:40');
}

console.log(1 && 5);
console.log(1 && 0);
console.log(null && 5);
console.log(1 && 2 && null && 3);



console.log(!null);
console.log(!!null);