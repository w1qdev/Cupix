import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false
    },
    personal_info: {
        type: String,
        required: false
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema)

export default User;