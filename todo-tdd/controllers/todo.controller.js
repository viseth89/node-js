const TodoModel = require("../model/todo.model")

exports.createTodo = () => {
    TodoModel.create()
};

exports.createtodo2 = () =>{
    console.log('this is wrong')
}

