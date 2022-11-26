const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    res.end(url)
})
server.listen(80, () => {
    console.log('server running in http://127.0.0.1')
})