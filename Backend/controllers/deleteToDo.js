// // import

// import TOdoModel from "../model/todo";   // import the Schema ie database model


// export async function deleteToDoController(req,res){
//     const todoId = req.params.todoId    // Searching for the Id from url 
//     // The above and below code are the same;
//     // const {todoId} = req.params
//     const delectedTodo = await TOdoModel.findByIdAndDelete({todoId});     // Deleting the respective todo with the ID
//     res.status(201).json(delectedTodo);
// }