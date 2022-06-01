const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    // console.log('request received');
    // res.end('request served')

    const url = req.url
    const method=req.method
    if (url === '/'){
        res.setHeader('content-type','text/html') 
        res.write('<html>')
        res.write('<head><title>server page</title></head>')
        res.write('<body><form action="/products" method="post" enctype="multipart/"><input type="text" name="product"><button type="submit" value="submit">submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url ==='/products' && method==='POST'){
        const data =[] 
        req.on('data',(chunk)=>{
            console.log(chunk);
            data.push(chunk)
        })
        req.on('end',()=>{
            const parsedData = Buffer.concat(data).toString()
            console.log(parsedData);
            const product = parsedData.split('=')[1]
            fs.writeFileSync('message.txt', product)
        })
        fs.writeFileSync('message.txt','Dummy')
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
    }

    // console.log(req.url,req.method,req.headers);
    // res.setHeader('content-type','text/html')
    // res.write('<html>')
    // res.write('<head><title>server page</title></head>')
    // res.write('<body><h1>This is from server</h1></body>')
    // res.write('</html>')
    // res.end
    // not usually used; but there---> process.exit()
});

server.listen(4000,()=>{'server listening on port 4000'})

// const server = http.createServer()

// server.on('connection',()=>{
//     console.log('connection established');
// })

// server.on('request',(req,res)=>{
//     console.log('request received');
//     res.end('from node server')
// })
// server.listen(4000,()=>{console.log('server listening on port 4000');})