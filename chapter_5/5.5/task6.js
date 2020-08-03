function Calculator() {
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };

    this.calc = function (str) {
        let splited = str.split(' ');

        let x = +splited[0];
        let operator = splited[1];
        let y = +splited[2];

        if (isNaN(x) || isNaN(y) || !this.operations.hasOwnProperty(operator)) {
            return NaN;
        }

        return this.operations[operator](x, y);
    };

    this.addMethod = function (name, func) {
        this.operations[name] = func;
    };
}