/* 
In this CreateTaskToDoController , we are selecting the respective belongings id and trying to add or create a task /todo /event to
*/
import TOdoModel from "../model/todo";   // import the Schema ie database model


export async function CreateTaskTodocontroller(req,res){

    const todoId = req.params.todoId;
    const todo = await TOdoModel.findById(todoId);
    if(!todo) return res.status(401).send(`No ToDo exists`)

    const {text} = req.body
    todo.tasks.push(text)
    await todo.save()
    req.json(todo)
}

