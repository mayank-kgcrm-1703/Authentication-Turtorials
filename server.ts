import app from "./src/app.js";
import "dotenv/config";
import connectDB from "./DB/DB.js";


connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server has been started on ${process.env.PORT}`);
})

