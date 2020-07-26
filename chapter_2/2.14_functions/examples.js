let userName = 'user1';

function showMessage() {
    let message = 'foo';
    console.log(userName + message);
}

showMessage();
showMessage();


//functions always copy value of arguments
function showMessage2(from, text) {
    from = '*' + from + '*';
    console.log(`${from}:${text}`);
}

let from = 'Anya';
showMessage2(from, 'jajaja');
console.log(from);


function foo(x=45, y) {
    console.log(x, y);
    return 5;
}

foo();
foo(1);
foo(4, 4);
foo(1, foo());


//get
//calc
//create
//check