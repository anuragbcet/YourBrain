import mongoose from "mongoose";
import { Schema } from "mongoose";
import { ref, title } from "process";


const userSchema = new Schema({
    username:{type:String , unique:true},
    password:{type:String}
});

const contentSchema = new Schema({
    title:String,
    link:String,
    type:String,
    tags:[{type:mongoose.Types.ObjectId , ref:"Tag"}],
    userId:{type:mongoose.Types.ObjectId, ref:"User"}
});

const linkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
});

const linkModel= mongoose.model("Link",linkSchema);

const userModel = mongoose.model("User",userSchema);
const contentModel = mongoose.model("Tag",contentSchema);

export  {userModel,contentModel,linkModel}