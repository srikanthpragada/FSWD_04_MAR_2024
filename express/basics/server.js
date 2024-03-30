const express = require('express') // use express library

const app = express()
const port = 3000

app.get('/',
    (req, res) => {
        res.send('<h1>Hello World!</h1>')
    }
)

app.get('/now',
    (req, res) => {
        res.send(`<h1>${new Date()}</h1>`)
    }
)

app.get('/hello',
    (req, res) => {
        let user = "Guest"

        if(req.query.name) 
            user = req.query.name 
        
        res.send(`<h1>Hello ${user}</h1>`)
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)