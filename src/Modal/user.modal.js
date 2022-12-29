const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    age:{type:Number},
    role:{type:String},
})

const UserModel=mongoose.model("user",UserSchema)

module.exports=UserModel;