function f(...args) {
    console.log('f: ', ...args);
}

function delay(func, ms) {
    return function wrapper(...args) {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

const f1500 = delay(f, 1500);
const f10000 = delay(f, 10000);


f1500(1, 2, 3, 'test');
f10000(0, 0, 0, {name: 'Jorge'});