const mongoose=require("mongoose");
const signinSchema=mongoose.Schema({
    
    rollno:Number,
    password:String

});
const Signin=mongoose.model("Signin",signinSchema);
module.exports=Signin;
