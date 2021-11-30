const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send('Base')
})

app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000`)
})