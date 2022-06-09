const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')

const products = []
router.get('/add-product', (req, res) => {
    res.render('add-product',{pageTitle: 'Add product'})
    // res.sendFile(path.join(rootDir,'views','add-product.html'))
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    // res.send('<form action="/product" method="post"><input type="text" name="product"><button type= "submit" value="">Add product</button></form>')
    console.log('first middleware');
})

router.post('/product', (req, res) => {
    console.log(req.body);
    products.push(req.body.product)
    res.redirect('/')
})

exports.routes = router
exports.products = products