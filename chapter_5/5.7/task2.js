function aclean(arr) {
    return Array.from(
        new Set(
            arr.map(value => value.split('').sort().join('').toLowerCase())
        )
    )
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let gg = 'dxAAA odfo';
console.log(Array.from(gg).sort());

console.log(aclean(arr));