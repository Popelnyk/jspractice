function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = (i) => () => console.log(i);
        shooters.push(shooter(i));
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5]();