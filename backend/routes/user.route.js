const express=require('express');

const signup=require('../controller/user.controller.js');
const router=express.Router();
router.post("/signup",signup);
module.exports = router ;