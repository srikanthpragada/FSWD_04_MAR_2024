const express = require('express') // use express library
const path = require("path")
const mysql2 = require("mysql2/promise")
const {conDetails} = require("./util")
const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/list',
    async (req, res) => {
        let con = null 
        try {
            con = await mysql2.createConnection(conDetails);
            const [rows, fields] = await con.query('SELECT * FROM employees');
            res.render('list', {employees : rows})
          }
          catch (error) {
            console.log("Error --> ", error)
          }
          finally {
            if(con)
              con.end() 
          }
    }
)



app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)