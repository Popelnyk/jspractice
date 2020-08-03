function extractValue(str) {
    let number = '';
    for (let char of str) {
        if ((char >= '0' && char <= '9') || char === '.') {
            number += char;
        }
    }
    return parseFloat(number);
}


console.log(extractValue('$123.4'));