let getLastDayOfMonth = (year, month) => (new Date(year, month + 1, 0)).getDate();

console.log(getLastDayOfMonth(2004, 11));