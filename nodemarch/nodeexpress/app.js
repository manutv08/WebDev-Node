const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views','views')
const rootDir = require('./utils/path')

const MongoConnect = require('./models/database').MongoConnect
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const errorController = require('./controllers/error')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(errorController.get404)

MongoConnect(client =>{
    // console.log(client)
    app.listen(3000,()=>{console.log('server is running on port 3000');})
})