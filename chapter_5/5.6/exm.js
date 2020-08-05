let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true }
            }
        }
    }
};

for (let it of range) {
    console.log(it);
}

let str = 'Hello';
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done === true) break;
    console.log(result.value);
}

////// array like or iteration Obj
let arrayLike = {
    0: 'hello',
    1: 'user1',
    length: 2
};

let arr = Array.from(arrayLike, (str) => str.toUpperCase());

arr.unshift('lol');

for (let it of arr) {
    console.log(it);
}

