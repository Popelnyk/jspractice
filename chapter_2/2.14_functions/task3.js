function pow(x, n) {
    let result = x;
    for (let i = 0; i < n; ++i) {
        result *= x;
    }

    return result;
}

x = prompt('enter x', '');
y = prompt('enter n', '');

alert(pow(x, y));