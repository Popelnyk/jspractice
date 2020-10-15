function sum(x) {
    let curSum = x;
    function f(y) {
        curSum += y;
        return f;
    }

    return f;
}