function multiplyNumericPropertiesOfAnObject(object) {
    if (typeof object === "object") {
        for (let prop in object) {
            if (object.hasOwnProperty(prop) && typeof object[prop] === "number") {
                object[prop] *= 2;
            }
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

multiplyNumericPropertiesOfAnObject(menu);

console.log(menu);