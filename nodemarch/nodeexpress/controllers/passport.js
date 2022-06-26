const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

exports.initializePassport = (passport)=>{
    const authenticateUser = async (email,password, done)=>{
        const user =  await User.findOne({email:email})

        if(!user){
            console.log('user not found');
            return done(null, {message: 'User not found'})
        }

        try {
            if(await bcrypt.compare(password, user.password)){
                return done(null,user)
            }else{
                console.log('password mismatch');
                return done(null, false, {message: 'Password Mismatch'})
            }

        } catch (error) {
            return done(error)
        }
    }
passport.use(new LocalStrategy({usernameField:'email', passwordField:'password'},
authenticateUser))

passport.serializeUser((user, done)=>{done(null, user.id)})
passport.deserializeUser(async(_id, done)=>{

    try {
        const user =  await User.findById({_id})
        done(null, user)
    } catch (error) {
       done(error, false) 
    }
})

}