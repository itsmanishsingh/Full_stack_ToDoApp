const express = require('express');
const router = express.Router();
const { home } = require('../controllers/userHome');
const { CreateTask } = require('../controllers/createTaskTodo');


router.get('/',home)
router.post('/createtask',CreateTask)



module.exports = router;