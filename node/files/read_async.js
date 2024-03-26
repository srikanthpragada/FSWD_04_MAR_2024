const fs = require("fs")

// Non-blocking code
fs.readFile("files/names.txt", "utf-8", 
               (err, data) => {
                if(err)
                   console.log("Error " + err.message)
                else
                   console.log(data)
               }
            )

console.log(new Date())
