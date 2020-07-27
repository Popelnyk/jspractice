let calculator = {
    x: null,
    y: null,

    read() {
        let x = prompt('enter x');
        let y = prompt('enter y');

        if (typeof this.x === 'string' && typeof this.y === 'string'
            && typeof +x === 'number' && typeof +y === 'number') {
            this.x = +x;
            this.y = +y;
        }
    },

    sum() {
        return this.x + this.y;
    },

    mul() {
        return this.x * this.y;
    },
};

calculator.read();
alert(calculator.mul());
alert(calculator.sum());