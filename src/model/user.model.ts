import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Username is mandatory!!!"],
        unique:[true, "Username must be unique"]
    },
    email:{
        type:String,
        required:[true, "Email is mandatory"],
        unique:[true, "Email has been taken already"]
    },
    password:{
        type:String,
        required:[true, "Password is mandatory"]
    }
});

const User = mongoose.model("users", userSchema);
export default User;