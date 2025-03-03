import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    phonenumber: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
    },
    
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
});

const User = mongoose.model("User", UserSchema);

export default User;