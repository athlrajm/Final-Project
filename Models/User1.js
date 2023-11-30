const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    Name: { type: String },
    Lastname:{type:String},
    Age:{type:Number},
    Email:{type:String},
    Password:{type:String}
},{timestamps:true})
module.exports=mongoose.model("User",UserSchema)