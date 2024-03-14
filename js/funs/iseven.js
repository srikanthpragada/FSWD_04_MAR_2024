function iseven(n) {
    if (n % 2 == 0)
        return true
    else
        return false
}



function isodd(n) {
    return n % 2 !== 0
}

console.log(iseven(10))
console.log(iseven(11))
console.log(isodd(11))