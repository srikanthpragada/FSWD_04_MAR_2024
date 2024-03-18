class Person {
    constructor(name, email) {
        this.name =  name
        this.email = email 
    }
    print() {
        console.log(this.name)
        console.log(this.email)
    }

    getEmail() {
        return this.email 
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email)  // call superclass's constructor 
        this.course = course 
    }

    print() {
        super.print()   // call superclass's print() 
        console.log(this.course)
    }
}

s = new Student("Mark", "mark@gmail.com", "MS CS")
console.log(s.getEmail())
s.print() 

