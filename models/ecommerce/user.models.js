import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    username: {
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    
    
    
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);