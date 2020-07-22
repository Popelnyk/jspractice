let x = 4;

switch (x) {
    case 3:
        console.log('no');
        break;
    case 5:
        console.log('no2');
        break;
    case 4:
        console.log('yes');
        break;
    default:
        console.log('error');
}


let a = '1';
let b = 0;

if (typeof a === 'string') {
    a = +a;
    switch (a) {
        case b + 1:
            console.log('true');
            break;
        default:
            console.log('false');
    }
}

x = 3;

switch (x) {
    case 2:
        console.log('looser');
        break;
    case 3:
    case 5:
        console.log('idiot');
        break;
    default:
        console.log('press F');
}