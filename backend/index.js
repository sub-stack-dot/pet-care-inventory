import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb is connetced")// for more security we don't give the direct link here, instead we have to create .env file, then give it's path
})
.catch((err)=>{
    console.log(err);
});

const app=express();// for routing

app.use(cors());// avoid sharing files between font & back
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.BACKEND_PORT,()=>{
    console.log("Server is running on port ${process.env.BACKEND_PORT}!");
})

app.use("/api/auth/",authRoutes);


app.use((err,req,res,next)=>{
    const statusCode=err.statusCode|| 500;
    const message=err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});

