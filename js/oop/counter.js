class Counter {
    constructor(value = 0) {
        this.value = value
    }
    inc() {
        this.value ++
    }
    dec() {
        this.value --
    }
    getValue() {
        return  this.value 
    }
}


var c1 = new Counter(100)  // create an object 
c1.inc()   // call method 
c1.inc()   
console.log(c1.getValue())
c1.value = 0
console.log(c1.getValue())

