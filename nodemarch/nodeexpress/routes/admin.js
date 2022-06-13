const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const productController = require('../controllers/product')

router.get('/add-product', productController.getAddProducts)

router.post('/product', productController.postAddProduct )

module.exports = router