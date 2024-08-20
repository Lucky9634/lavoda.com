const mongoose = require("mongoose")


const adminModels = mongoose.Schema({
    fname: {
        type: String,
        required: [true, "First Name is Required"]
    },
    lname: {
        type: String,
        required: [true, "Last Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
}, { timestamps: true }
);


module.exports = mongoose.model("adminUser",adminModels)