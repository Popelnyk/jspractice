function min(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a < b) ? a : b;
    }
}

console.log(min(5,7));