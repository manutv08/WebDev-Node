const fs = require('fs')
const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{
//     fs.readFile('message.txt',(err,data)=>{
//         if(err) return console.log(err);
//         console.log(data.toString());
//         res.end(data)
//     })
        const rstream = fs.createReadStream('message.txt')
        // rstream.pipe(res)
        const wstream = fs.createWriteStream('message2.txt')
        rstream.pipe(wstream)
        // rstream.on('data',(chunk)=>{
        //     console.log('new chunk received');
        //     wstream.write(chunk)
        // })



        // rstream.on('data',(chunk)=>{
        //     res.write('<h1>new chunk received</h1>')
        //     res.write(chunk)
        //     console.log('new chunk recevied');
        //     console.log(chunk);
        //     rstream.on('end',()=>{res.end()})
        // })
        //     rstream.on('error',()=>{
        //                 res.end('file not found')
        //     })

})

    server.listen(3000,()=>{console.log('serverstarted');})