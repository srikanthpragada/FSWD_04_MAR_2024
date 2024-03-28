const fs = require("fs/promises")

async function showLongNames() {
    let contents = await fs.readFile("files/names.txt", "utf-8")
    //console.log(contents)
    let lines = contents.split("\n")
    for (let line of lines)
      if (line.length > 5)
         console.log(line)

}


showLongNames()


