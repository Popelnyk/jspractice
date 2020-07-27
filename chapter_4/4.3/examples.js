let user = {
    name: 'Albert',
};

let id = Symbol('id');

user[id] = 1;

console.log(user[id]);
console.log(user);

for (let prop in user) {
    console.log(prop);
}

let clone = Object.assign({}, user);
console.log(clone);


let globalId = Symbol.for('id');
let globalIdAgain = Symbol.for('id');

console.log(globalId === globalIdAgain);

console.log(Symbol.keyFor(globalId));
console.log(Symbol.keyFor(id));


console.log(Reflect.ownKeys(user));
console.log(Object.getOwnPropertySymbols(user));