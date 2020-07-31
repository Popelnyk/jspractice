function Calculator() {
    this.readData = (x, y) => {
       this.x = x;
       this.y = y;
    };

    this.calcSum = () => {
        return this.x + this.y;
    };

    this.calcMul = () => {
        return this.x * this.y;
    }
}

let c1 = new Calculator();

c1.readData(4,66);
console.log(c1.calcMul(), c1.calcSum());