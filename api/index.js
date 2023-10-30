import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
dotenv.config();

// Connection to mongodb
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to Mongodb!");
    })
    .catch((err) => {
        console.log(err);
    });
    
    // using express to make a connection to server
const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// test api using json
app.use("/api/user", userRouter);
