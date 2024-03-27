const fs = require("fs/promises")


async function read() {
    try {
        let contents = await fs.readFile("files/names.txt", "utf-8")
        console.log(contents)
    }
    catch (ex) {
        console.log("Error -->" + ex)
    }
}

read()
console.log(new Date())

