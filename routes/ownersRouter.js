const express = require('express');

const router = express.Router();
const ownersModel = require('../models/ownersmodel.js'); // Assuming you have an owners model

router.get('/', (req, res) => {
    res.send('Owners route');
});

if(process.env.NODE_ENV === 'development') {
    router.post("/create", async(req, res) => {
        //res.send("working in development");
        let owners=await ownersModel.find();
        if(owners.length>0) return res.status(503).send("Owners already exist");

        let {fullname,email,password} = req.body;
        //res.send("Creating owners");
        let createdowner=await ownersModel.create({
            fullname,
            email,
            password,
        });
        res.status(201).send(createdowner);
    });    

}
module.exports = router;
