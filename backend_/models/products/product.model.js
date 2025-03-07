import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    alt: { type: String, required: true },
    category: { type: String, required: true, enum: ["Food", "Grooming", "Supplements"] },  
    stock: { type: Number, default: 0 },
    description: { type: String, default: "" }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

export default Product;
