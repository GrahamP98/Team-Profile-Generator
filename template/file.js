const fs = require("fs");

const file = (fileContent) => {
    fs.file("./output/index.html", fileContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console("Team profile generated.")
        }
    })
};

module.exports = file;