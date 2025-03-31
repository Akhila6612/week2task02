const mongoose=require("mongoose");
const signupSchema=mongoose.Schema({
    name:String,
    fatherName:String,
    dateofbirth:String,
    branch:String,
    rollno:Number,
    section:String,
    address:String,
    mobileno:String,
    password:String
});
const Signup=mongoose.model("Signup",signupSchema);
module.exports=Signup;
