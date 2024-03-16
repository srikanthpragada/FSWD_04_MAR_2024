
// Spread Objects 

let p = { name: "Larry", company: 'Google' }
console.log(p)

let p2 = p   // alias 

// create copy using spread operator 
let p3 = { ... p }
console.log(p3)

p.name = "Sergy"
console.log(p3)


let p4 = { ... p, age : 30 }
console.log(p4)

let p5 = { ... p, company :'Alphabet'}
console.log(p5)