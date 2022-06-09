const express = require('express')

const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const adminRoutes = require('./admin')

router.get('/',(req,res,next)=>{
    const products = adminRoutes.products
    console.log(products);
    // res.send('home page containing list of products')
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    // res.sendFile(path.join(__dirname,'..','views','shop.html'))
    res.render('shop',{productsList:products,pageTitle: 'Shop'})
})


module.exports = router