const http = require("http")
const fs = require("fs")
const path = require('path')


const server = http.createServer()
server.on("request", function(req, res) {
    const url = req.url
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '../clock/index.html')
    } else {
        fpath = path.join(__dirname, '../clock', url)
    }

    console.log(fpath)
    fs.readFile(fpath, 'utf8', function(err, dataStr) {
        if (err) {
            return res.end('404 not find')
        } else {

            res.end(dataStr)
        }
    })
})
server.listen(80, function() {
    console.log("server listen at http://127.0.0.1")
})