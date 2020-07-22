for (;;) {
    let number = prompt('enter number > 100', '');
    if(typeof number === 'string') {
        let trueNumber = +number;
        if (trueNumber > 100) {
            alert('good!');
            break;
        }
    }
}
