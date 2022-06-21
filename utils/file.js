const fs = require("fs");

//generates a index.html with the file content inputted by user
const writeFile = (fileContent) => {
    fs.writeFile("./output/index.html", fileContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Team profile generated.")
        }
    })
};

module.exports = writeFile;