// const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views','views')
const rootDir = require('./utils/path')

const MongoConnect = require('./models/database')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const errorController = require('./controllers/error')
// const server = http.createServer((req,res)=>{
//     res.end("server works")
// })
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
// app.get('/',(req,res,next)=>{
//     console.log('this is a middleware');
//     // res.send('home page containing list of products')
//     res.sendFile(path.join(__dirname,'views','shop.html'))
// })
app.use(errorController.get404)

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
MongoConnect(client =>{
    console.log(client)
    app.listen(3000,()=>{console.log('server is running on port 3000');})
})