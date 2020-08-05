let arr = ['illa', 'kagor'];
let [firstName, surname] = arr;

console.log(firstName, surname);

[firstName, surname] = 'irro kopper'.split(' ');
console.log(firstName, surname);

let user = {
    name: 'kkk',
    age: 30,
};

for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

let mp = new Map([
    ['ffff', 'qqqqq'],
    ['ssss', 'kkkkk'],
]);

for (let [key, value] of mp) {
    console.log(key, value);
}

let options = {
    title: "Menu",
    width: 100,
};

let {title, width: w = 1920, height: h = 1080} = options;
console.log(title, w, h);