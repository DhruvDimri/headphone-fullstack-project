import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then( () => {
    app.on("error", (error) => {
        // console.log("ERROR IN CONNECTION OF EXPRESS TO DB", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO_DB CONNECTION FAILED", err);
})


















// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb+srv://dhruv:dhruv132465@cluster0.mmy6k.mongodb.net/headBackend")
//     console.log("\n MONGODB CONNECTED")
//     } catch (error) {
//         console.log("MONGODB ERROR:", error)
//         process.exit(1)
//     }
// }

// connectDB();

