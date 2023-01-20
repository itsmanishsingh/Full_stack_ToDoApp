const app = require('../app');
const home = (req,res)=>{
    res.status(201).json(`Welcome to the home page of ToDoApp via controllers and routers`);
}

module.exports = home;