const jwt = require('jsonwebtoken');

const createTokenAndSaveCookie=(UserId,res)=>{
    const token = jwt.sign({UserId},process.env.JWT_TOKEN,{
        expiresIn:"5d",
    });
    res.cookie("jwt",token,{
        httpOnly:true,//xss attack
        secure:true,
        sameSite:"strict",//csrf attack
    });
};
module.exports=createTokenAndSaveCookie;