const fs = require("fs/promises")

fs.readFile("files/names.txt", "utf-8")
    .then(result => {
         return fs.writeFile("file/names2.txt", result)
    })
    .then(result => {
        console.log("Copied Successfully!")
    })
    .catch(error => {
        console.log("Error : ", error)
    }
) 
    



