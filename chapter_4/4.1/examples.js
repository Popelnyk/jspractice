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


