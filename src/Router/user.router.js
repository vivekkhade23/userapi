const express=require("express");
const UserModel=require("../Modal/user.modal")
const userRouter = express.Router();
const bcrypt=require("bcrypt")

userRouter.post("/signup",async(req,res)=>{
    try{ 
    const {email,password,age}=req.body
    let user = new UserModel({email, password,age });
    user = await user.save();
    res.send(user)
    }
    catch(e){
        
        res.status(401).send({ message: "Signup Failed",error:e })
    }
})


userRouter.post("/login",async (req,res)=>{
    try{ 
        const { email, password } = req.body;
     const user = await UserModel.findOne({ email, password });
     res.send(user)
     }catch(e){
         res.status(401).send({ message: "Login Failed",error:e })
     }
 })
 
   



 
module.exports=userRouter;