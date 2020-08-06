let user = {
    name: "Василий Иванович",
    age: 35
};

let jsonUser = JSON.stringify(user);
console.log(jsonUser);

let fromJSONUser = JSON.parse(jsonUser);
console.log(fromJSONUser);