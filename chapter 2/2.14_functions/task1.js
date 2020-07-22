function checkAge(age, confirm=false) {
    if (typeof age === 'number') {
        return (age > 18 || confirm);
    }
}

console.log(checkAge(15, true));