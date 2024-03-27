const fs = require("fs/promises")

async function copyFile() {
    try {
        let contents = await fs.readFile("files/names.txt", "utf-8")
        await fs.writeFile("files/names2.txt", contents, 'utf-8')
        console.log("Copied")
    }
    catch (ex) {
        console.log("Error -->" + ex)
    }
}

copyFile()
console.log("Copying file names.txt to names2.txt")



