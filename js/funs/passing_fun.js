
setTimeout(show, 1000)
setTimeout(function () {
   console.log("Anonymous Fun")
},
    2000)

setTimeout( () => console.log("Arrow"), 5000)    


function show() {
    console.log("Time UP!")
}