function f(...args) {
    console.log(...args);
}


function debounce (func, ms) {
    let isCoolDown = false;
    return function wrapper(...args) {
        if (isCoolDown === false) {
            func.apply(this, arguments);
            isCoolDown = true;
            setTimeout(() => isCoolDown = false, ms);
        }
    }
}


f = debounce(f, 1500);
f('heh', 'hoh', 'ror');
f('rrrr', 4, 4, 4);

setTimeout(() => f(0, 0, 0), 1600);
