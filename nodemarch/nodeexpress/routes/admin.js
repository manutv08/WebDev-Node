const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const productController = require('../controllers/product')

router.get('/add-product', productController.getAddProducts)

router.post('/product', productController.postAddProduct )

router.get('/edit-product/:id',productController.getEditProduct)

router.post('/edit-product',productController.postEditProduct)

router.post('/delete-product',productController.postDeleteProduct)



module.exports = router