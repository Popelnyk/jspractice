function random(l, r) {
    // 0..1
    // *(r-l) 0..(r-l)
    // +l  l..r
    return Math.random() * (r - l) + l;
}

console.log(random(5, 10), random(7, 45), random(7, 10));