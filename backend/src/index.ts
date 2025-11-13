import express from 'express';
import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userRouter from './router/user.js';

dotenv.config();


const MONGODB_URI = process.env.MONGO_URI ;
const app = express();
app.use(express.json());

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



app.listen(4000,()=>{
    console.log("server is running on port: 4000");
})