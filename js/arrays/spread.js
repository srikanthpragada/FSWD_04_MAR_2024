a = [1, 2, 3]
b = a

a.push(4)
console.log(b)


a = [1, 2]
b = [...a]    //  b = [1, 2]
a.push(3)
console.log(a, b)

a = [1, 2]
b = [0, ...a, 3]
console.log(b)


