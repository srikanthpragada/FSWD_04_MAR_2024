let a = [1, 2, 3]

// let n1 = a[0]
// let n2 = a[1]
// let n3 = a[2]
// console.log(n1, n2, n3)

let [a1, a2, a3, a4] = [1, 2, 3]
console.log(a1, a2, a3, a4)

let [b1, b2] = [1, 2, 3, 4]
console.log(b1, b2)

// Destructuring assignment with default value
let [n1, n2, n3, n4 = 0] = [1, 2, 3]
console.log(n1, n2, n3, n4)


let [x, , z] = [1, 2, 3]
console.log(x, z)

let [v1, v2, ...v3] = [1, 2, 3, 4]
console.log(v1, v2, v3)



