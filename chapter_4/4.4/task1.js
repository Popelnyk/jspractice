let calculator = {
    x: null,
    y: null,

    read() {
        let x = prompt('enter x');
        let y = prompt('enter y');

        if (Number.isFinite(+x) && Number.isFinite(+y)) {
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