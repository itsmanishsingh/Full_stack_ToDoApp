require("dotenv").config();
const express = require('express');
const connectToDB = require('./config/database');
const userRoute = require('./routes/userRoute');
const app = express();


//Middleware
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));

// Connecting with DataBase
connectToDB();

app.use("/",userRoute);


module.exports = app;