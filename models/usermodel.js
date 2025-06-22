const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/scratch");

const userSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:[],
    isadmin:Boolean,
    orders:[],
    contactnumber:Number
});

module.exports = mongoose.model('user', userSchema);