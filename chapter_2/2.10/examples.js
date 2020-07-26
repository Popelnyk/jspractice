let year = prompt('enter year');

if(typeof year === 'string') {
    year = +year;
    if (year === 1000) {
        alert('good');
    }
}