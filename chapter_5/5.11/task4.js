let getSecondsUntilTomorrow = () => {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now) / 1000);
};

console.log(getSecondsUntilTomorrow());