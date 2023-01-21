const mongoose = require('mongoose');
const connectToDB = require('../config/database')

/* both the above and below codes are the same
const mongoose = require('mongoose');
*/

const Schema = mongoose.Schema; // Here we are extracting schema first 
// or both the above and below statements are the same
// const TOdoSchema = new Schema()
// A ways to start with new SCHEMA

const ToDoSchema = new Schema({
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
