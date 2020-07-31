function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (x) {
        this.value += x;
    }
}

let test = new Accumulator(5);

test.read(10);
test.read(-49);
test.read(49);
test.read(59);

console.log(test.value);