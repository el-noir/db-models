import mongoose, { mongo } from 'mongoose';

const UserSchema = new mongoose.Schema({
    //  username: String,
    //  email: String,
    //  isActive: Boolean,

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    }



}, {timestaps: true});

export const User = mongoose.model("User", UserSchema);
