function sumArgs(...args) {
    console.log(typeof args);
    let result = 0;
    for (let item of args) {
        result += item;
    }

    return result;
}


console.log(sumArgs(1, 2, 3, 4, 5));

let arr = [1, 3, 5224, 1121, -1111];
console.log(sumArgs(...arr));

function args1() {
    let args = Array.from(arguments);
    console.log(args);
    args.pop();
    console.log(...args);
}

args1(1, 2, 3);

