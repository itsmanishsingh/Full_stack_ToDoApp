require("dotenv").config();
const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.status(201).json(`Welcome to the First Page of ToDo App via app.js file`);
})

module.exports=app;