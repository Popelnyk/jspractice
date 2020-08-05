
let getDateAgo = (date, days) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
};

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 4).toString());