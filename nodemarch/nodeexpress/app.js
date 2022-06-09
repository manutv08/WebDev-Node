// const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const rootDir = require('./utils/path')

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
// const server = http.createServer((req,res)=>{
//     res.end("server works")
// })
app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
// app.get('/',(req,res,next)=>{
//     console.log('this is a middleware');
//     // res.send('home page containing list of products')
//     res.sendFile(path.join(__dirname,'views','shop.html'))
// })
app.use((req,res)=>{
    // res.status(404).send("<h1>404 Error</h1>")
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

// app.use((req,res,next)=>{
//     console.log('this works for all requests ');
//     next()
// })



// app.use('/',(req,res,next)=>{
//     console.log('this is a middleware');
//     res.send('home page containing list of products')
//     // res.send("this is from server")
//     // next()
// })

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