function randomInteger(l, r) {
    return Math.floor(Math.random() * (r + 1 - l) + l);
}

console.log(randomInteger(1, 3), randomInteger(1, 3));