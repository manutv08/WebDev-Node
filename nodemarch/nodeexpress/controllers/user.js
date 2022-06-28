const User = require('../models/user')
const Product = require('../models/product')
const bcrypt = require('bcrypt')


exports.loginUser =(req, res)=>{
    res.render('login',{pageTitle:"Login Page"})
}

exports.postLogin =(req, res)=>{
    const user = req.body
    console.log(req.body)
    User.findOne({email:req.body.email, password:req.body.password},(err,user)=>{
        if(err) throw err;

        if(!user){
            console.log('Invalid User');
            res.render('register',{pageTitle:"Register Page"})
        }else{
            Product.find()
            .then(products=>{
                res.render('shop',{productsList:products,pageTitle: 'Shop'})

            })
        }
    })
}

exports.registerUser =(req, res)=>{
    res.render('register',{pageTitle:"Registration Page"})
}

exports.postRegister =async (req,res)=>{
    let email = req.body.email
    let password = await bcrypt.hash(req.body.password,10)
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

exports.logout = (req,res)=>{
    req.logout(err=>{
        if(err) {return err}
        res.redirect('/login')
    })
}