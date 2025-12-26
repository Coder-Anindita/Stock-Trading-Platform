import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
  }
});
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateToken=function(){
    return jwt.sign({
        email:this.email,
        _id:this.id,
        username:this.username,
    },process.env.TOKEN_SECRET,
    {expiresIn:process.env.TOKEN_EXPIRY}
        
        
    )
}
export const User=mongoose.model("User",userSchema);