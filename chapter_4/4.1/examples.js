let user0 = new Object();

// preferred way of using
// object's literal
let user1 = {};

let user = {
    name: 'John',
    age: 30,
    'likes birds': true,
};

// add field
user.isAdmin = true;

// delete field
delete user.age;

console.log(user.name, user.age, user.isAdmin);
console.log(user);

user['foo'] = 'bar';
console.log(user['likes birds'], user['foo']);

delete user['likes birds'];

let key1 = 'flo';
user[key1] = 14;

console.log(user);


let userFoo = {
    [key1]: 'test one',
};

console.log(userFoo);

///////////////////////////////////////////
console.log('-------------------');

function makeUser(name, age) {
    return {
        name,
        age,
        // ...
    }
}

let userTest = makeUser('John', 40);
console.log(userTest);

/*
let user3 = {
    name,       //name: name (we must have name variable)
    age: 30,
};
*/

///////////////////////////////////////////
console.log('-------------------');

let obj1 = {
    // ...
};

obj1.__proto__ = 5;
console.log(obj1);    //[object Object]

///////////////////////////////////////////
console.log('-------------------');

let user5 = {
    age: 10,
    foo: true,
};

let key2 = 'age';
console.log(user5.age === undefined, user5.name === undefined);
console.log(key2 in user5, 'name' in user5);


let obj3 = {
    test: undefined,
};

//!!!!
console.log(obj3.test === undefined);
console.log('test' in obj3);

///////////////////////////////////////////
console.log('-------------------');

let user6 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let prop in user6) {
    console.log(prop, user6[prop]);
}

///////////////////////////////////////////
console.log('-------------------');

let user7 = {
    name: 'John',
};

let almostUser7 = {
    name: 'John',
};

let admin = user7;

user7.name = 'Adam';
console.log(user7);
console.log(admin);

console.log(admin === user7);
console.log(user7 === almostUser7);

const user8 = {
    name: 'John',
};

user8.name = 'Steve';
/*
    error
    user8 = {
        name: 'R',
    };
 */

//Флаги и дескрипторы свойств. (!!!!!!)


//cloning objects
console.log('-------------------');

let userForCopies = {
    name: 'John',
    age: 45,
};

let permissions = {
    canView: true,
    canWrite: false,
};

let rules = {
    wayToTheShop: 'left left right',
};

Object.assign(userForCopies, permissions, rules);
console.log(userForCopies);

Object.assign(userForCopies, {name: 'Clown'});
console.log(userForCopies);

let clone = Object.assign({}, userForCopies);
console.log(clone, clone === userForCopies);
