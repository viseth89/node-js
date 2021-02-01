const TodoModel = require("../model/todo.model")

exports.createTodo = (req, res, next) => {
    TodoModel.create(req.body);
    res.status(201).send();

    // why does req.body work?
    // why is it ''.send();" to make the expect 'res._isEndCalled()' work;
};
