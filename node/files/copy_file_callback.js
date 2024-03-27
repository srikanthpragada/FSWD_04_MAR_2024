const fs = require("fs")


fs.readFile(__dirname + "/names.txt", "utf-8",
    (err, data) => {
        if (err)
            console.log("Error " + err.message)
        else {
            // write to names2.txt
            fs.writeFile(__dirname + "/names2.txt", data,
                (err) => {
                    if (err)
                        console.log("Sorry! Error " + err)
                    else
                        console.log("Copied!")
                } // callback for write 
                
            )  // writeFile 
        }// callback of read 
    })


