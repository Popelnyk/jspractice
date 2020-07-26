sayHi = function () {
    console.log('press f');
};

console.log(sayHi);


function askQuestion(question, yes, no) {
    if (confirm(question)) {
        yes();
    }
    else {
        no();
    }
}


askQuestion(
    'is it?',
    function () { alert('yes'); },
     function () { alert('no'); }
     );



let age = prompt('how old are you?', '');
let welcome = null;

if (age >= 18) {
    welcome = function () {
        console.log('fuk');
    }
}
else {
    welcome = function () {
        console.log('hello');
    }
}

//welcome()