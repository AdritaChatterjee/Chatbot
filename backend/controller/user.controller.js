const User = require('../models/user.model.js');
const bcrypt=require('bcryptjs');
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
        res.status(201).json({ message: "User registration done successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = signup;
