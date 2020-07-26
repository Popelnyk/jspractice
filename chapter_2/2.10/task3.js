number = prompt('enter Number', '');

if(typeof number === 'string') {
    number = +number;
    if(number > 0) {
        alert(1);
    }
    else if(number < 0) {
        alert(-1);
    }
    else {
        alert(0);
    }
}