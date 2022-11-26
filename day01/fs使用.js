const fs = require('fs')
fs.readFile('./01.txt', 'utf8', function(err, dataStr) {
    console.log(err)
    console.log(typeof dataStr)
})