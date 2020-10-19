function work() {
    console.log('xxx', arguments);
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }

    wrapper.calls = [];
    return wrapper;
}


const nWork = spy(work);
nWork(1, 2, 3, 4);
nWork(1, 8);
nWork(0, 0, 0, 0, 4444444);

console.log(nWork.calls);