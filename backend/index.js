const express = require('express');
const dotenv = require('dotenv');
const mongoose=require('mongoose');
const userRoute=require('./routes/user.route.js');
const app = express();

// Load environment variables from .env file
dotenv.config();
app.use(express.json())

const port = process.env.PORT || 3000; // Get the PORT from the environment or default to 3000
const url=process.env.MONGO_URL;
try{
mongoose.connect(url).then(console.log("Connection Established!"))
}catch(error){console.log(error)}

app.use("/user",userRoute);

app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}/`);
});
