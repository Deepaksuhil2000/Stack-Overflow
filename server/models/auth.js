// in this folder we are creating our shcema
import mongoose from "mongoose";

const userScema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    about: {type: String},
    tags: {type: [String]},
    joinedOn: { type: Date, default: Date.now }
})

export default mongoose.model("User", userScema)