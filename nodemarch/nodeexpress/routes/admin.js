const express = require('express')

const router = express.Router()

router.use('/add-product',(req,res)=>{
    res.send('<form action="/product" method="post"><input type="text" name="product"><button type= "submit" value="">Add product</button></form>')
    console.log('first middleware');
})

router.use('/product',(req,res)=>{
    console.log(req.body);
})




module.exports = router