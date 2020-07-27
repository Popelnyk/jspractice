let user0 = {
    name: 'John',
    age: 14,
};

user0.sayHi = () => console.log('ghi');

user0.sayHi();


user1 = {
    name: 'Add',
    age: 5,

    sayHi() {
        console.log(this.name);
    },
};

user1.sayHi();

function sayHi1() {
    console.log(this);
}

user1.sayHi1 = sayHi1;
user1.sayHi1();
