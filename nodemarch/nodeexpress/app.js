const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views','views')
const rootDir = require('./utils/path')

const passport = require('passport')
const session = require('express-session')

const {initializePassport} = require('./controllers/passport')

initializePassport(passport)
// const MongoConnect = require('./models/database').MongoConnect
const mongoose = require('mongoose')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const errorController = require('./controllers/error')

const userRoutes = require('./routes/user.js')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(userRoutes)
app.use(errorController.get404)

mongoose.connect("mongodb+srv://manu:verizone@cluster0.h7gwpdc.mongodb.net/cart?retryWrites=true&w=majority")
.then(()=>{

    app.listen(3000,()=>{console.log('server is running on port 3000')})
})

// MongoConnect(client =>{
//     // console.log(client)
//     app.listen(3000,()=>{console.log('server is running on port 3000');})
// })