let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint === 'string' ? `{name: '${this.name}'}` : this.money;
    }
};


console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + ''); // hint: default -> 1500