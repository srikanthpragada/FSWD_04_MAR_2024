const express = require('express') // use express library
const path = require("path")

const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/now',
    (req, res) => {
         res.render('now',  // view 
            { now : new Date(), user : req.query.name}  // data 
          )
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)