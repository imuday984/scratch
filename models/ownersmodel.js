const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/scratch");

const ownerSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    //cart:[],
    products:[],
    //isadmin:Boolean,
    //orders:[],
    contactnumber:Number,
    gstn:String,
});

module.exports = mongoose.model('owner', ownerSchema);