const fs = require('fs')
const http = require('http')

const server = http.createServer();

server.on('request', (req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    const rstream = fs.createReadStream(__dirname + '/server.html','utf8')
    rstream.pipe(res)
})

server.listen(3000,()=>{console.log('serverstarted');})