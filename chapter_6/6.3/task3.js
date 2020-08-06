let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

let byField = (field) => (obj1, obj2) => (obj1[field] > obj2[field] ? 1 : -1);

users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);