const express=require("express");
const UserModel=require("../Modal/user.modal")
const userRouter = express.Router();

userRouter.post("/signup",async(req,res)=>{
    try{ 
    const {email,password,age}=req.body
    let olduser=await UserModel.findOne({email})
    if(olduser){
        return res.send("user already exist")
    }
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