// import todo from "../model/todo";

const app = require("../app");
const Todo = require("../model/todo");

exports.createTodo = async (req,res)=>{
    try {
        const { title } = req.body;
        if(!title){
            // throw new Error(`Title is compulsory`);
            return res.status(401).json({
                success:false,
                message:'todo title is mandatory'
            })
        }
        const todo = new Todo({
            title: title
        })
        
        const response = await todo.save()
        if(response){
            res.status(201).json({
                success:true,
                message:`todo created successfully`,
                todo
            })
        }else{
            res.status(400).json({
                success:false,
                message:`Couldnot Save todo in the database`
            })
        }
        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
};


exports.deleteTodo = async (req,res)=>{
    try {
        const {todoid} = req.params
        if(!todoid){
            res.status(201).json({
                success:false,
                message:`Todo is not there in the database`
            })
        }

        const todeletetodo = await Todo.findByIdAndDelete({todoid})
        if(!todeletetodo){
            res.status(400).json({
                success:false,
                message:`The ${todoid} couldnot be deleted`
            })
        }else{
            res.status(201).json({
                success:true,
                message:`The ${todoid} is deleted`,
                todeletetodo
            })
        }
        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}


exports.edittodo = async (req,res)=>{

    try {
        const {todoid} = req.params

        if(!todoid){
            res.status(200).json({
                success:false,
                message:`The todo with the ${todoid} doesnot exist in the database`
            })
        }

        const toedittodo = await Todo.findByIdAndUpdate(todoid , {
            title : title
        })
        
        if(!toedittodo){
            res.status(400).json({
                success:false,
                message:`The selected ${todoid} is not edited`
            })
        }

        res.status(201).json({
            success:true,
            message:`The selected ${todoid} is updated`
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


exports.getTodo = async (req,res)=>{

    try {
        const {todoid} = req.params
        if(!todoid){
            res.status(401).json({
                success:false,
                message:`Todo with the ${todoid} does not exist in the database`
            })
        }
        const gettodo = await Todo.findById({todoid})
        if(!todoid){
            res.status(401).json({
                success:false,
                message:`Fetching failed`
            })
        }
        res.status(201).json({
            success:true,
            message:`Fetcing Successfull`,
            gettodo
        })


    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

exports.createTask = async (req,res)=>{

    try {
        const {todoid} = req.params
        const { task } = req.body
        if(!todoid){
            res.status(400).json({
            message:`Couldnot find ${todoid}`
            })
        }

        const todotask = await Todo.findById(todoid)
        todotask.tasks.push(task)
        await todotask.save()
        res.status(201).json({
            success:true,
            message:`Task added successfully`,
            task
        })
        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}
exports.deleteTask = async (req,res)=>{

    try {
        const { todoid } = req.params
        const { taskelement } = req.body

        if(!todoid || !taskelement){
            res.status(401).json({
                success:false,
                message:`Cannot find the task to delete in the database`
            })
        }
        const todeletetask = await Todo.findById(todoid)
        if(!todeletetask){
            res.status(400).json({
                success:false,
                message:`Deletion failed `
            })
        }
        if(todeletetask.tasks.length <1){
            throw new Errors(error.message)
        }else{
            todo.tasks.pull(taskelement)
            await todeletetask.save()
            res.status(201).json({
                success :true,
                message:`Task deleted Successfully`
            })
        }
       
    } catch (error) {
        res.status(401).json({
            success:false,
            message:`Delete task failed`
        })
    }
}





















// export async function CreateTaskTodocontroller(req,res){

//     const todoId = req.params.todoId;
//     const todo = await TOdoModel.findById(todoId);
//     if(!todo) return res.status(401).send(`No ToDo exists`)

//     const {text} = req.body
//     todo.tasks.push(text)
//     await todo.save()
//     req.json(todo)
// }
