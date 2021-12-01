const express = require('express')
const app = express()

const middle1 = require("./middleware/middleware")
const middle2 = require("./middleware/middleware2")
const middle3 = require("./middleware/middleware3")

app.get("/", (req, res) => {
    res.send('Base')
})

app.post("/one", (req, res) => {
    res.send('one')
})


app.post("/two", (req, res) => {
    res.send('two')
})


app.post("/three", middle1, middle2, (req, res) => {
    // console.log(variablefrommiddle1)
    res.send('three')

})

app.post("/four", middle1, middle2, (req, res) => {
    // console.log(variablefrommiddle1)
    var tyson;
    sadie = {}
    var cocoa;


    console.log(tyson)
    console.log(sadie)
    console.log(cocoa)
    console.log(value1)

    res.send('three')

})

app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000`)
})