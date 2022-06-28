const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const userController = require('../controllers/user')
const passport = require('passport')

router.get('/login',userController.loginUser)
router.get('/register',userController.registerUser)
router.post('/register', userController.postRegister)

router.post('/login', passport.authenticate('local', {
        successRedirect: '/', 
        failureRedirect: '/login'
        
})) //userController.postLogin

router.get('/logout', userController.logout)

module.exports = router