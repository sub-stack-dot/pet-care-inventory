import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import User from "../models/users/User.model.js";

export const signup = async (req, res, next) => {
  const { fullname, email, password} =
    req.body;

  if (!fullname || !email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    fullname,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({message:"Signup successful"});
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password} = req.body;
  const fcmtoken = token2;

  if (!email|| !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email});
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid password"));
    }
    const token = jwt.sign(
      { id: validUser._id},
      process.env.JWT_SECRET,
      // {expiresIn:"7d"}
    );

    const { password: pass, ...rest } = validUser._doc;
   
    

    validUser.fcmtoken = fcmtoken;
    await validUser.save();

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};



//Password update function when user _id received
export const updatePassword = async (req, res, next) => {
  const { password } = req.body;

  if(!password){
    return next(errorHandler(400,"Password is required"));
  }
  
  try {
    // Hash new password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Update user password
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: { password: hashedPassword } },
      { new: true }
    );

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
};  