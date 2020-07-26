let n = 100;

outer: for (let i = 1; i < n; ++i) {
    for (let j = 2; j < i; ++j) {
        if (i % j === 0) {
            continue outer;
        }
    }

    console.log(i);
}