const fs = require("fs");
const { resolve } = require("path");

let thisFilePath = __dirname;

const readPathPromise = (filePath, extension) => {
    return new Promise((resolve, reject) => {
        fs.readdir(filePath, (err, filesArray) => {
            if (err) {
                reject(err);
            } else {
                resolve(arrayLoop(filesArray, extension))
            }
        })
    })
}

function arrayLoop(array, filetype) {
    let newArray= [];
    for (x in array) {    
        if (array[x].includes(filetype)) {
            newArray.push(array[x]);
        }
    }
    
    for (x in newArray) {
        let file = newArray[x]
        fs.readFile(file, "utf8", callback = (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
    }
}

readPathPromise(thisFilePath, ".txt")
    .then()
    .catch(err => console.log(err));
//     .then(resolve => { arrayLoop(resolve, ".txt") });







