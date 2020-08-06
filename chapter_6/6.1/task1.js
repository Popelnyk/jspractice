let calcSum = (n) => {
    if (n === 1) return 1;
    else return calcSum(n - 1) + n;
};


console.log(calcSum(5));