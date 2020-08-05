let formatDate = (date) => {
    let now = new Date();
    let diff = (now - date) / 1000;

    if (diff <= 1) {
        console.log('now');
    } else if (diff <= 30) {
        console.log('30 sec ago');
    } else if (diff <= 300) {
        console.log('5 min ago');
    } else {
        now.setMinutes(now.getMinutes() - diff);
        console.log(`${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`);
    }
};

formatDate(new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000));
formatDate(new Date(new Date - 5 * 60 * 1000));
formatDate(new Date(new Date - 86400 * 1000));