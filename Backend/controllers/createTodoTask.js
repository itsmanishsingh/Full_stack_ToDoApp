// createTodoController 


// Creating a new todo 

import TOdoModel from "../model/todo";   // import the Schema ie database model

export async function createTodoController(req,res){
    // creating a new todo
    const newTodo = new TOdoModel({
        title: req.body
    })

    const createdNewtodo = await newTodo.save()
    res.json(createdNewtodo);

    /* Further addition can be done 
        -Try and Catch
        -Status code 
        -Check the tile and make it compulsary 
        -Check whether the title is already available 
    */
     
}