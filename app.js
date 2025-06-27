// usermodel
// full name
// email
// password
// cart
// isadmin
// orders
// contact number



/*
product
image
name
price
discount
bgcolor
panelcolor
textcolor
*/
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
const path = require('path');
const db=require('./config/mongoose-connection');
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');



app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.use("/owners",ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000);