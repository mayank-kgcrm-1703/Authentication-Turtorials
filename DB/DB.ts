import mongoose from "mongoose";
import "dotenv/config";

async function connectDB() {
    try {
        // console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI!)
       console.log(`Connected to Database.`);
    
    } catch (error) {
        console.error(`Error in DB connection`, error);
    }
}

export default connectDB;