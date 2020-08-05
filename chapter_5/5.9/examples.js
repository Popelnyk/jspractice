let user = {
    name: 'John',
    age: 14,
};

for (let it of Object.entries(user)) {
    console.log(it);
}