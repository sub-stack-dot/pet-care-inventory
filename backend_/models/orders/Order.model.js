import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    customerName: { type: String, required: true },
    contact: { type: String, required: true }
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);

export default Order;