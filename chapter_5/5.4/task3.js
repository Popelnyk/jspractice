let arr = [];

let l = -10, r = 10;

for (let i = 0; i < 10; ++i) {
    arr.push(Math.floor(Math.random() * (l + 1 - r) + r));
}

let prefixArr = 0, maxPrefix = -Infinity, indp = 0;
let suffixArr = 0, maxSuffix = -Infinity, inds = 0;

for (let i = 0; i < 10; ++i) {
    prefixArr += arr[i];
    if (maxPrefix < prefixArr) {
        maxPrefix = prefixArr;
        indp = i;
    }
}


for (let i = 9; i >= 0; --i) {
    suffixArr += arr[i];
    if (maxSuffix < suffixArr) {
        maxSuffix = suffixArr;
        inds = i;
    }
}

console.log(arr);
console.log(Math.max(inds, 0), Math.min(indp, 9));


