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


function outReverseList(list) {
    if (list.next !== null) outReverseList(list.next);
    console.log(list.value);
}

outReverseList(list);