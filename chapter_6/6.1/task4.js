let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null,
                },
            }
        }
    }
};


function out() {
    let start = list;
    while (start) {
        console.log(start.value);
        start = start.next;
    }
}

console.log(list);
out();
console.log(list);
