function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }

    return (str.substring(0, maxlength - 1) + '...');
}


console.log(truncate('qwer qwer qwer qwer qwer qwer', 20));