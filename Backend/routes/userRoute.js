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
// router.post('/createtodo',createTodo)
// router.post('/createtask/:todoid',createTask)
// router.get('/gettodo/:todoid',getTodo)
// router.put('/edittodo/:todoid',edittodo)
router.delete('/deletetodo/:id', deleteTodo)
// router.delete('/deletetask/:id',deleteTask)


module.exports = router;