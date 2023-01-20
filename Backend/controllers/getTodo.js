// This "gettodo " we will get one individual todo 

// import 



import TOdoModel from "../model/todo";   // import the Schema ie database model


export async function getTodoController(req,res){
    // gettodo:todoID
    // The above todoID and below todoID should be same 
    const {todoID} = req.params

    const alltodos = await TOdoModel.findById( todoID )
    res.json(alltodos);

    /*
        Validate all todos
        
    */
}