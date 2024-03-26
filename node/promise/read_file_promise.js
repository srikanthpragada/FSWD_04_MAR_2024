const fs = require("fs/promises")

fs.readFile("files/names.txt", "utf-8")
    .then(result => console.log(result))
    .catch(error => console.log("Error : ", error))

console.log("The End")


