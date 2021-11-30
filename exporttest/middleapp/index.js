const { Router } = require('express')
var express = require('express')

const function1 = require('../middleware/middle1')
const function2 = require('../middleware/middle2')
const function3 = require('../middleware/middle3')
const formidable = require("formidable");

const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

var app = express()

app.get("/",function1, function2, function3,   (req, res) => {
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

app.get("/one",function1, function2, function3,   (req, res) => {
    console.log('original route')
    res.send("hey there one")
})

app.post("/two",function1, function2, function3,   (req, res) => {
    console.log('original two route')
    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }

        console.log(fields)
        console.log(files)
    })

    res.send("hey there two")
})

app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000`)
})