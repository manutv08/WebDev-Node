const User = require('../models/user')
exports.loginUser =(req, res)=>{
    res.render('login',{pageTitle:"Login Page"})
}

exports.registerUser =(req, res)=>{
    res.render('register',{pageTitle:"Registration Page"})
}

exports.postRegister = (req,res)=>{
    let email = req.body.email
    let password = req.body.password
    let user = new User({
        email:email,
        password:password
    })

    user.save((err,registerUser)=>{
        if(err) throw err
        console.log(registerUser)
        res.render('login',{pageTitle:"Login"})


})
}