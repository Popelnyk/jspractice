let map = new Map();

map.set('1', 4).set(true, '4').set(false, '5');

console.log(map.get(true));

map.set(true, '5');

console.log(map.get(true));
console.log(map.size);

let usr = {
    name: 'John',
    age: 15,
};

map.set(usr, 'has permissions');

console.log(map.get(usr));


////


let recipeMap = new Map([
    ['cuc', 500],
    ['veg', 600],
    ['foo', 1000],
]);

for (let key of recipeMap.keys()) {
    console.log(key);
}

for (let value of recipeMap.values()) {
    console.log(value);
}

for (let entry of recipeMap) {
    console.log(entry);
}

recipeMap.forEach((value, key, map1) => {
    console.log(`value: ${value}, key: ${key}`);
});


////

let obj1 = {
    name: 'foo',
    surname: 'bar',
    age: 14,

    sayHi: () => console.log('f'),
};

let mapObj = new Map(Object.entries(obj1));

mapObj.forEach((value, key) => {
    console.log(`key: ${key}`);
    if (typeof value === "function") {
        value();
    }
});

let obj2 = Object.fromEntries(mapObj);
console.log(obj2);

////--------- Set ----------////

let visits = new Set();

let john = { name: 'John' };
let marie = { name: 'Marie' };
let petr = { name: 'Petr' };

visits.add(john)
      .add(marie)
      .add(john)
      .add(petr);

console.log(visits);

for (let it of visits) {
    console.log(it);
}

visits.forEach(value => console.log(value));