let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalaries(obj) {
    let max = -Infinity;
    let maxName = null;

    for (let [name, salary] of Object.entries(obj)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalaries(salaries));
console.log(topSalaries({}));