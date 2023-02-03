const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// fs.readFile("file1.txt", "utf8", callback=(err, file2)=>{
//     if(err){
//         return console.log(err);
//     }
//     fs.readFile(file2, "utf8", (err, file3)=>{
//         if(err){
//             return console.log(err);
//         }
//         fs.readFile(file3, "utf8", (err, file4)=>{
//             if(err){
//                 return console.log(err);
//             }
//             fs.readFile(file4, "utf8", (err, file4result)=>{
//                 if(err){
//                     return console.log(err);
//                 }
//                 console.log(file4result);
//                 console.log(`${file2}\n${file3}\n${file4}`);
//             })
//         })
//     })
// })


// console.log("create dough");

// setTimeout(function() {
//   console.log("bake for 10 minutes")
// }, 0);

// console.log("let cake cool down");

const readFilePromise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf8", (err, result) => {
            if (err) {
                reject(err);
            }
            console.log(result);
            resolve(result);
        })
    })
}

readFilePromise("file1.txt")
    .then(result => readFilePromise(result))
    .then(result => readFilePromise(result))
    .then(result => readFilePromise(result))
    .catch(error => console.log(error))
