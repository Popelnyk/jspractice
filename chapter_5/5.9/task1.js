function sumSalaries(obj) {
    return Object.values(obj).reduce((previousValue, currentValue) => previousValue + currentValue);
}

function propertyCountWithSymbols(obj) {
    return Reflect.ownKeys(obj).length;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries));
console.log(propertyCountWithSymbols(salaries));
