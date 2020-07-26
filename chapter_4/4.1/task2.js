function isEmptyObject(object) {
    for (let prop in object) {
        return false;
    }
    return true;
}

let schedule = {
    // ...
};

console.log(isEmptyObject(schedule));

schedule.monday = 'rrR';

console.log(isEmptyObject(schedule));

