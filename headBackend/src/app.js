import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())


//routes import

import userRouter from "./routes/user.routes.js"

//route declaration

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });
// app.get('/pink', (req, res) => {
//     res.send("hello")
    
// });
// app.get('/users/register',(req, res) => {
//     res.cookie("hello", "buddy");
//    res.send("hello");
// });

app.use("/users", userRouter)



export { app }