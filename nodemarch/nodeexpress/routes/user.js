const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const userController = require('../controllers/user')

router.get('/login',userController.loginUser)
router.get('/register',userController.registerUser)
router.post('/register', userController.postRegister)
module.exports = router