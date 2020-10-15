const timerId = setTimeout(() => console.log('F'), 1000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId);