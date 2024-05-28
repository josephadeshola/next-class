import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

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

let saltRound = 10;
userSchema.pre('save', async function(next) {
    try {
        const hash = await bcryptjs.hash(this.password, saltRound);
        this.password = hash;
        next();
        console.log(this.password);
    } catch (error) {
        console.error(error);
        next(error);
    }
});


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
