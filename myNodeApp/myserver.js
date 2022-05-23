var http=require("http")
console.log(http);
let server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("hell")
})
server.listen(3000)