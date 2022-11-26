const fs = require("fs");
const path = require("path");
// console.log(path.join(__dirname, './01.txt'))
// console.log(__dirname + './01.txt')
fs.readFile(path.join(__dirname, './01.txt'), 'utf8', function(err, dataStr) {
        if (err) {
            return console.log(err.message)
        }
        console.log(typeof dataStr)
    })
    // let s = path.join(__dirname, './01.txt');
    // console.log(path.basename(s, '.txt'))
    // console.log(path.extname(s) + 'wwwwww')