import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  image: String,
  alt: String,
  category: String,
  stock: Number,
},{timestamps: true});

const Product = mongoose.model("Product", productSchema);
export default Product;