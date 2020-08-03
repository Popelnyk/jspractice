function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('innocent rabbit'));