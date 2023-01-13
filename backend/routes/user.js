const express=require('express');
const { getAllUsers, updateuser } = require('../controller/userController');
const router=express.Router()


router.get('/getusers',getAllUsers);
router.put("/updateuser/:id",updateuser);

module.exports = router;