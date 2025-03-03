import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {errorHandler} from "../utils/error.js";

export const signin = async(req, res, next)=>
{
    const{email, password}=req.body;

    if(!email || !password){
        return next(errorHandler(400, "Email and password are required"));
    }
    const hashedPassword=bcryptjs.hashSync(password, 10);
}
try {
    const newUser=new User({
        email,
        password:hashedPassword,
    });

    await newUser.save();
    res.json("User created successfully");

} catch (error) {
    next(error);
}