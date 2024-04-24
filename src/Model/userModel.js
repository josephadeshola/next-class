import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"]
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
