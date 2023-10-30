import mongoose from "mongoose";

// Create a data model for user using mongoose to structure mongodb
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;