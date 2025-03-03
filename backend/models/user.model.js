import mongoose from "mongoose";
const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            requred:true,
        },
    },
    {timestamps:true}
);//schema
const user=mongoose.model("user",userSchema);
export default User;