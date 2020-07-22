let password = prompt('enter password', '');

if (typeof password === 'string') {
    if (password === 'qwerty') {
        alert('hello');
    }
    else {
        alert('incorrect password');
    }
}
else if (password === null){
    alert(typeof password);
    alert('canceled');
}