const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    Title:String,
    price:Number,
    description:String,
    category:String,
    img:String,
    rating:Number,
    discount:Number,
    offerprice:Number,
    reviews:Number 
});
const Product=mongoose.model("Product",productSchema);
module.exports=Product;


