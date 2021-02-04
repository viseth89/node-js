const TodoModel = require("../model/todo.model")

exports.createTodo =  async (req, res, next) => {
    const createdModel =  await TodoModel.create(req.body);
    res.status(201).json(createdModel);
};

    // Res must append '.send()' or else it will return an error
    //         expect(res._isEndCalled()).toBeTruthy();
    // Related

    // why does req.body work?
    // why is it ''.send();" to make the expect 'res._isEndCalled()' work;




