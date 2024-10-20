const User = require('../models/user.model.js');
const bcrypt=require('bcryptjs');
const createTokenAndSaveCookie=require('../jwt/generateToken.js');
const signup = async (req, res) => {
    try {
        const { fullname, email, password, confirmpassword } = req.body;

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists!" });
        }
        const hashedpassword = await bcrypt.hash(password,10);
        // Create a new user
        const newUser = new User({
            fullname,
            email,
            password:hashedpassword,
        });

        // Save the user
        await newUser.save();
        if(newUser){
        createTokenAndSaveCookie(newUser._id,res);
        res.status(201).json({ message: "User registration done successfully",newUser});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

const login = async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch =await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(404).json({message:"Invalid user or password"});
        }
        createTokenAndSaveCookie(user._id,res);
        res.status(201).json({message:"User logged in successfully",user:{
            _id:user._id,
            name:user.name,
            email:user.email,
        },
    });
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Server error"});
    }
};

module.exports ={signup,login};
