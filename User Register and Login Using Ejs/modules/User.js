const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,
        default: "other",
        enum:["male","female","other"]
    },
    password:{
        type:String,
        trim:true,
    },
    conformPass:{
        type:String,
        trim:true,
    }
})


//! Exporting User Schema
module.exports = mongoose.model('User',UserSchema);