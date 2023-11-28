import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema ({
    documentType: {
        type: String
    },
    document: {
        type: String,
        trim: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true
    }
}, 
{
    timestamps: true
});

const userModel = model('users', userSchema);

export default userModel;