import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import productRoutes from './routes/product.route.js';
import orderRoutes from './routes/order.routes.js';
import jwt from 'jsonwebtoken';
import User from './models/users/User.model.js';
import bcrypt from "bcrypt";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ MongoDB is connected successfully!');
}).catch(err => {
    console.error('❌ MongoDB connection failed:', err);
});

// Register Route
app.post('/register', async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ fullname, email, password: hashedPassword });
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                const accessToken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1m' });
                const refreshToken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '5m' });

                res.cookie('accessToken', accessToken, { maxAge: 60000 });
                res.cookie('refreshToken', refreshToken, { maxAge: 30000, httpOnly: true, secure: true, sameSite: 'strict' });
                return res.json("Login Successful");
            } else {
                return res.json("Incorrect Password");
            }
        } else {
            return res.json("No record existed");
        }
    } catch (err) {
        return res.json(err);
    }
});

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Start Server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
