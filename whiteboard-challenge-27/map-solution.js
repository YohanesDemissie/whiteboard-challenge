const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let rotate = a => a[0].map((col, c) => a.map((row, r) => a[r][c]).reverse())

console.log(rotate(a))