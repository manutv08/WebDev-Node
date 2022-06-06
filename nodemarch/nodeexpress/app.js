// const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const adminRoutes = require('./routes/admin.js')
// const server = http.createServer((req,res)=>{
//     res.end("server works")
// })
app.use(bodyParser.urlencoded({extended:true}))

app.use((req,res,next)=>{
    console.log('this works for all requests ');
    next()
})



app.use('/',(req,res,next)=>{
    console.log('this is a middleware');
    res.send('home page containing list of products')
    // res.send("this is from server")
    // next()
})

// app.use((req,res,next)=>{
//     console.log('this is next middleware');
//     next()
// })
// app.use((req,res,next)=>{
//     console.log('this is third middleware');
//     res.send('last result from the server')
// })

// const server = http.createServer(app)

// server.listen(3000)
app.listen(3000,()=>{console.log('server is running on port 3000');})