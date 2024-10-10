import mongoose from "mongoose";

const userSchema=mongoose.Schema(
    {
        fullname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },


    }
)
const User=mongoose.model("User",userSchema)//schema covert to model 

export default User;