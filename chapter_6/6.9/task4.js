function f(...args) {
    console.log(...args);
}

function throttleDecorator(func, ms) {
    let isThrottled = false;
    let savedArgs = null,
        savedThis = null;

    return function (...args) {
        if (isThrottled === false) {
            func.apply(this, arguments);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
                if (savedArgs !== null) {
                    func.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            }, ms);

        } else {
            savedArgs = args;
            savedThis = this;
        }
    }
}

let f1000 = throttleDecorator(f, 1000);

f1000(1);
f1000(2);
f1000(3);