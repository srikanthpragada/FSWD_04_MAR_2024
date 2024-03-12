let names = ["JavaScript", "Java", "Python", 
             "Ruby", "C" ]

names.push("TypeScript")  // Append 
console.log(names)

console.log(names.pop())

names.splice(0, 1)      // Delete 0th element 
console.log(names)

console.log(names.indexOf("Python"))

names.sort()
console.log(names)