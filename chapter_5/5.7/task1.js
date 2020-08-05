function unique(arr) {
    return Array.from(new Set(arr))
}

let arr = [1, 2, 3, 3, 4, 'john', 'pet', 'pet', ];

console.log(unique(arr));