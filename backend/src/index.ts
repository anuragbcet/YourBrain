import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'


import express from 'express';
import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';
import userRouter from './router/user.js';
const PORT = process.env.PORT || 4000;

const MONGODB_URI = process.env.MONGO_URI ;
const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://yourbrain.anuragcodes.space", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


async function main(){
    try {
        if (!MONGODB_URI) {
            throw new Error('MONGO_URI is not defined in the environment');
        }
        await mongoose.connect(MONGODB_URI);
        console.log("mongodb connected");

        app.use('/api/v1/user',userRouter);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

main()

app.listen(PORT,()=>{
    console.log("server is running on port: 4000");
})