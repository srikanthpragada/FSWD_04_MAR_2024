let names = ["JavaScript", "Java", "Python"]

names[3] = "TypeScript"  // add new
names[1] = "Java 20"     // update existing 

console.log(names)

// indexes
for (let idx in names) {
    console.log(`Value at ${idx} is ${names[idx]}`)
}

// values 
for (let name of names) {  
    console.log(name)
}