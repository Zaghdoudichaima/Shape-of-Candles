const express=require('express')
const { current, signUp, signIn } = require('../controller/authController')

const isAuth = require('../middleware/isAuth')

const { registerRules,validator, loginRules } = require('../middleware/validator')
const router=express.Router()


router.post('/signup',registerRules,validator,signUp);
router.post('/signin',loginRules,validator,signIn);
router.get('/current',isAuth,current);



module.exports=router