function sumInput(values) {
    let numbers = [];

    for (let val of values) {
        if (isFinite(val) && val !== '' && val !== null) {
            numbers.push(val);
        }
    }

    let res = 0;
    for (let val of numbers) {
        res += val;
    }

    return res;
}

console.log(sumInput([4, 4, 1, 6, 4, 3, '  ', null]));