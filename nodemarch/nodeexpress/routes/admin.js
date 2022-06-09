const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    // res.send('<form action="/product" method="post"><input type="text" name="product"><button type= "submit" value="">Add product</button></form>')
    console.log('first middleware');
})

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router