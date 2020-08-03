function filterRange(arr, l, r) {
    return arr.slice(l, r + 1);
}

let arr = [5, 3, 8, 4, 1];

console.log(filterRange(arr, 2, 3));