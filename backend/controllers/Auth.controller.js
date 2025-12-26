import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"


const Signup=async(req,res,next)=>{
    try{
        const {email,username,password}=req.body;
        if(!email){
            return res.status(400).json({
                message:"Email field is required"
            })
        }
        if(!username){
            return res.status(400).json({
                message:"Username field is required"
            })
        }
        if(!password){
            return res.status(400).json({
                message:"password field is required"
            })
        }
        
        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"User already exist"})

        }
        
        const user=await User.create({
            email,password,username
        })
        const Token=user.generateToken()
        
        await user.save({validateBeforeSave:false})
        res.cookie("token",Token,{
            withCredentials:true,
            httpOnly:true,
        })
        res.status(201).json({message:"User signed up sucessfully", user: {
                id: user._id,
                email: user.email,
                username: user.username
            }})
            next()

    }
    catch (err) {
        console.error("SIGNUP ERROR:", err);
        res.status(500).json({
        message: "Signup failed",
        error: err.message
    });
    
}


}


const Login=async(req,res)=>{

    try{
        const {email,password}=req.body
        if(!email){
            return res.status(400).json({
                message:"email is required"
            })
        }
        if(!password){
            return res.status(400).json({
                message:"password is required"
            })
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"No user exist"})
        }
        const isPasswordMatched=await user.isPasswordCorrect(password)
        if(!isPasswordMatched){
            return res.status(400).json({message:"Incorrect Password"})

        }

        const Token=user.generateToken()
        res.cookie("token",Token,{
            withCredentials:true,
            httpOnly:true
        })
        return res.status(200).json({message:"user Logged in successfully"})
    }
    catch(err){
        return res.status(500).json({message:"Error while logging in",error:err.message})

    }

    

}
export  {Signup,Login};