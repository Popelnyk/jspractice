let name = prompt('Enter your name', '');
let confirmed = confirm(`Is it your name [${name}]?`);

if(confirmed) {
    alert(`Welcome, ${name}`);
}
else {
    alert('bye, bye');
}