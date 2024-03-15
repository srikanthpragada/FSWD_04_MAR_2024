
function wish(...names) {
    for(let n of names)
      console.log("Hi " + n)

}

function wish2(msg, ...names) {
    for(let n of names)
      console.log(`${msg} ${n}`)

}

wish('Scott', 'Jack')
wish('Joe', 'Mark', 'Bill')
wish()

wish2('Hello','Andy','Ben')



