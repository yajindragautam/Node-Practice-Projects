const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        required: true,
        trim:true,
    },
    phone:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        required: true,
    }
})

//! Exporting User Mongose Schema
module.exports = mongoose.model('User', UserSchema);