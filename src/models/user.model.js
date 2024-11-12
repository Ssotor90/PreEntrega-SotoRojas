import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    pets: {
        type: Array,
        default: [],
    },
});

export default mongoose.model('User', userSchema);