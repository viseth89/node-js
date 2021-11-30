const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send('Base')
})

app.post("/one", (req, res) => {
    res.send('one')
})


app.post("/two", (req, res) => {
    res.send('two')
})


app.post("/three", (req, res) => {
    res.send('three')
})

app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000`)
})