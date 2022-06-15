const express = require('express')

const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const adminRoutes = require('./admin')
const productController = require('../controllers/product')

router.get('/', productController.getProducts)

router.get('/products/:id',productController.getProduct)

module.exports = router