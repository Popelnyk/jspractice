function cachingDecorator(func) {
    let cache = new Map();

    return function (...args) {
        if (cache.has(args)) {
            console.log('x');
            return cache.get(args);
        } else {
            const result = func(...args);
            cache.set(args, result);
            return result;
        }
    }
}

function slow(x) {
    return x**30;
}

function verySlow(x, y, obj, list) {
    let objNew = Object.assign({}, obj);
    objNew.foo = list[x] ** list[y];
    return objNew;
}

slow = cachingDecorator(slow);

console.log(slow(5));
console.log(slow(4));
console.log(slow(5));


verySlow = cachingDecorator(verySlow);

const joj = {
    name: 'hah',
    surname: 'coc'
}

const lli = [1, 2, 89, 4324, 134235];

console.log(verySlow(1, 2, joj, lli));
console.log(verySlow(1, 3, {name: 'opo', surname: 'coc'}, [1, 2, 3, 9, 5]));
console.log(verySlow(1, 2, joj, lli));
console.log(verySlow(1, 2, joj, lli));
console.log(verySlow(1, 0, {name: 'qqqqqq', surname: 'joj'}, [1, 1, 3, 4, 5]));