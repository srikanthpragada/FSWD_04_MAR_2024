function max(a, b, c) {
    if (a > b && a > c)
        return a
    else
        if (b > c)
            return b
        else
            return c
}


console.log(max(10,15,5))

