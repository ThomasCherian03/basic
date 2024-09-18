import mongoose from "mongoose";

const userInfo = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:
    {
        type:Number,
        required:true
    },
    college: 
    {
        type:String,
        required:true
    }
});

const detail = mongoose.model("INFO", userInfo);

export default detail;


