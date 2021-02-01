const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model")
const httpMocks = require("node-mocks-http")
const newTodo = require("../mock-data/new-todo.json")

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe("TodoController.createTodo", () => {

    beforeEach(() => {
        req.body = newTodo;
    })



    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function");
    });
    it('should call TodoModel.create', () => {
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    })
    it("should return 201 response code", () =>{
        TodoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("Should return json body in response", () => {
        TodoModel.create.mockReturnValue(newTodo);
        TodoController.createTodo(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    });
});



    /*
        expect(received).toBe(expected) // Object.is equality

    If it should pass with deep equality, replace "toBe" with "toStrictEqual"

    Expected: {"done": false, "title": "Make first unit test"}
    Received: serializes to the same string

      36 |         TodoModel.create.mockReturnValue(newTodo);
      37 |         TodoController.createTodo(req, res, next);
    > 38 |         expect(res._getJSONData()).toBe(newTodo);
         |                                    ^
      39 |     });
      40 | });
      41 | 
    */