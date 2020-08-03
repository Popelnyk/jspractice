function copySorted(arr) {
    let arrCopy = Object.assign([], arr);
    if (Array.isArray(arrCopy)) {
        return arrCopy.sort();
    }
    return arrCopy;
}

let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr));
console.log(arr);