let p = { fullname: 'Larry', 
          company: "Google",
          age : 30 }

let { fullname, company } = p
console.log(fullname, company)

let {a = 30 , n} =   {n : 'Mark'}
console.log(n, a)

let { name : fname , year : age  } =  {name : 'Mark', year : 30}
console.log(fname, age)




