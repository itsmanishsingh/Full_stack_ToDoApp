const express = require('express');
const router = express.Router();

const { createTodo,
        deleteTodo, 
        edittodo, 
        getTodo, 
        createTask, 
        deleteTask,
        home  } = require('../controllers/createTaskTodo');


router.get('/',home)
router.get('/gettodo',getTodo)
router.put('/edittodo',edittodo)
router.post('/createtodo',createTodo)
router.post('/deletetodo',deleteTodo)
router.post('/createtask',createTask)
router.post('/deletetask',deleteTask)



module.exports = router;