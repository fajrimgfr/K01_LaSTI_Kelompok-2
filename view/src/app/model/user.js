// Import library
const mongoose = require("mongoose");

// Schema Kamar
const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    nama: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

// Export
mongoose.models = {}
module.exports = mongoose.model("user", User)