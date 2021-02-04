const express = require('express');
const todoRoutes = require('./routes/todo.routes')
const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);


app.get("/",(req, res) => {
    res.send('Hello World!')
});
app.get("/hello",(req, res) => {
    res.send('Hello to you too World!')
});


module.exports = app;