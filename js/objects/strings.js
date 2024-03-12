var s = "Hello"
console.log(s[0])
console.log(s.length)  // length property 

var rate = 100
console.log("Rate = " + rate)
console.log(`Rate = ${rate}`)  // template string 

console.log(s.includes('lo'))  // true if substring is present
console.log(s.indexOf('lo'))   // Position of substring 

var st = "abc,xyz,pqr"
var parts = st.split(",")     // returns an array 
console.log(parts)

st = "Hello"
console.log(st.substring(0,3)) 
console.log(st.slice(3))

console.log("*".repeat(10))
console.log("   abc xyz  ".trim())

s = "Javascript"
console.log(s.toUpperCase())  // string is immutable 
console.log(s)






