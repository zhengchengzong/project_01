const Http = require("http2");

const server = Http.createServer()
server.on('request', function(req, res) {
    console.log(req.url)
})
server.listen(80, function() {
    console.log("server running at http://127.0.0.1:8080")
})