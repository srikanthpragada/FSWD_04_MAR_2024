const express = require('express') // use express library
const path = require("path")
const mysql2 = require("mysql2/promise")
const { conDetails } = require("./util")
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/list',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      const [rows, fields] = await con.query('SELECT * FROM employees');
      res.render('list', { employees: rows })
    }
    catch (error) {
      console.log("Error --> ", error)
      res.end(`<h3>Sorry! Error :  ${error}`)
    }
    finally {
      if (con)
        con.end()
    }
  }
)

app.get('/add',
  (req, res) => {
    res.render("add",
      {
        message : '', empname: '', deptid: '', salary: '',
      }
    )
  }
)

app.post('/add',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      let result = await con.query(
        "insert into employees(fullname,dept_id, salary) values (?,?,?)",
        [req.body.empname, req.body.deptid, req.body.salary]
      )
      res.redirect("/list")
    }
    catch (error) {
      console.log("Error --> ", error)
      res.render("add",
        {
          message: error,
          empname: req.body.empname,
          deptid: req.body.deptid,
          salary: req.body.salary,
        })
    }
    finally {
      if (con)
        await con.end()
    }
  }
)

app.get('/delete/:empid',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      let result = await con.query(
        "delete from employees where emp_id = ?",
        [req.params.empid]
      )
      res.redirect("/list")
    }
    catch (error) {
      console.log("Error --> ", error)
      res.end(`<h4>Sorry! Could not delete employee ${req.params.empid} </h4>`)
    }
    finally {
      if (con)
        await con.end()
    }
  }
)


app.get('/edit/:empid',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      let [rows, fields] = await con.query(
        "select * from employees where emp_id = ?",
        [req.params.empid]
      )
      let emp = rows[0]
      console.log(emp)
      res.render("edit",
      {
         message : '', 
         empname: emp.fullname,
         deptid: emp.dept_id,  
         salary: emp.salary
      }
    )
    }
    catch (error) {
      console.log("Error --> ", error)
      res.end(`<h4>Sorry! Could not delete employee ${req.params.empid} </h4>`)
    }
    finally {
      if (con)
        await con.end()
    }
   
  }
)

app.listen(port,
  () => {
    console.log(`Server listening on port ${port}`)
  }
)