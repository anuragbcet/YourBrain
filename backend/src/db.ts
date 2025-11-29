import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String }
});

const tagSchema = new Schema({
    name: String
});

const contentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User" }
});

const linkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true, unique: true },
});

const userModel = mongoose.model("User", userSchema);
const tagModel = mongoose.model("Tag", tagSchema);
const contentModel = mongoose.model("Content", contentSchema);
const linkModel = mongoose.model("Link", linkSchema);

export { userModel, tagModel, contentModel, linkModel };
