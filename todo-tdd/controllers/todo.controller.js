const TodoModel = require("../model/todo.model")

exports.createTodo = (req, res, next) => {
    TodoModel.create(req.body)
    // why does req.body work?
};

exports.createtodo2 = () =>{
    console.log('this is wrong')
}

