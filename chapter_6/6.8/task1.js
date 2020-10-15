const printNumbers = (from, to) => {
    let x = from;
    const timerId = setInterval(print, 1000);

    function print() {
        if (x <= to) {
            console.log(x);
            x += 1;
        } else {
            clearInterval(timerId);
            console.log(timerId);
        }
    }
}

const printNumbersTimer = (from, to) => {
    let x = from;
    const timerId = setTimeout(() => {
        if (x <= from) {
            console.log(x);
            setTimeout(printNumbers, 1000, x, to);
        } else {
            clearInterval(timerId);
            console.log(timerId);
        }
    });
}

printNumbers(1, 10);
printNumbersTimer(15, 25);