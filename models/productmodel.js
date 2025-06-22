const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scratch");

const productSchema = new mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String
});

module.exports = mongoose.model('product', productSchema);