const mongoose = require('mongoose');
// const connectToDB = require('../config/database')

const ToDoSchema = new mongoose.Schema({
    // title : String,
    title:{
        type:String,
        required:true,
        unique:true
    },
    tasks:{
        type:[String]
    }
})

module.exports = mongoose.model("Todo" , ToDoSchema);
