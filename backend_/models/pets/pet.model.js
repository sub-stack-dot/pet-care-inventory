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
    breed: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    }
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

export default Pet;