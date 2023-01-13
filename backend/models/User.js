const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    last_name: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    adress:{
        type:String,
        rquired:true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    
});
module.exports = mongoose.model("User", userSchema);