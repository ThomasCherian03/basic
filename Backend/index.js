import express from "express";
import dotenv from "dotenv"; 
import mongoose from "mongoose";
import router from "./route.js"

const app = express();
dotenv.config();
app.use(express.json());
app.use("/user",router);

const PORT = process.env.PORT || 3001
const URI = process.env.MONGODB_URI

try {
    mongoose.connect(URI)
    console.log("CONNECTED TO MONGODB");
    
} catch (error) {
    console.log(error);
    
}

app.listen(PORT, (req,res)=>
{
    console.log(`Server is running on port ${PORT}`)
})

app.get("/",(req,res)=>
{
    res.send("THIS IS WORKING")
})

