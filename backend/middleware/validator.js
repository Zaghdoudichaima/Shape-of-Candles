const { body, validationResult } = require('express-validator')

const registerRules=[
    body('last_name','last_name is required').notEmpty(),
    body('first_name','first_name is required').notEmpty(),
    body('phone',"phone must have at least 8 characters").isLength({min:8}),
    body('password',"password must have at least 6 characters").isLength({min:6})
]
const loginRules=[
  body('phone',"phone must have at least 8 characters").isLength({min:8}),
  body('password',"password must have at least 6 characters").isLength({min:6})
]

const validator=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}
module.exports={registerRules,validator,loginRules}