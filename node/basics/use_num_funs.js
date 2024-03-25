
// import all members of the module 
let funs = require("./num_funs")

// import only one function 
let {iseven} = require("./num_funs")

console.log(funs)

console.log(funs.iseven(10))
console.log(iseven(10))
