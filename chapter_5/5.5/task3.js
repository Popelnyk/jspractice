function filterRangeInPlace(arr, l, r) {
    arr.map((value, index, arr) => {
        if (value >= l && value <= r) {
            arr.splice(index, 1);
        }
    })
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 2, 6);
console.log(arr);