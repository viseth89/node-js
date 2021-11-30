var express = require('express')

const five = require("./middleware/five")
const four = require("./middleware/five")
const middleware1 = require("./middleware/middle1")
const function2 = require("./middleware/middle2")
const function3 = require("./middleware/middle3")

const formidable = require("formidable");

const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

var app = express()

app.get("/", middleware1, function2, function3,   (req, res) => {
    console.log('original route')
    
    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }

        console.log(fields)
        console.log(files)
    })


    res.send("hey there get")
})

app.get("/one", function2, function3,   (req, res) => {
    console.log('original route')
    res.send("hey there one")
})

app.post("/two", middleware1, function2, function3, (req, res) => {



    console.log('original two route')
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //       next(err);
    //       return;
    //     }

    //     // console.log(fields)
    //     // console.log(files)
    // })

    return res.send(req.dataFromMiddleware1)
})
app.post("/three", function3, (req, res) => {
    console.log('original three route')

    res.send("hey there route three")
})

app.post("/four", four, (req, res) => {

    res.send("hey there route three")
})

app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000`)
})