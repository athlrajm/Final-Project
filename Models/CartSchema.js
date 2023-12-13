const mongoose=require('mongoose')

const CartSchema=new mongoose.Schema({
    ProductName:{type:String,require:true},
    ProductId:{type:String,require:true,unique:true},
    ProductDetails:{type:Array,require:true},
    ProductPrice:{type:String,require:true},
    ProductImage:{type:Array,require:true}
},{timestamps:true})

module.exports=mongoose.model("Cartproducts",CartSchema)