import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number ,
        required: true,
    }
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

export default Pet;