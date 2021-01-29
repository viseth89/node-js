const express = require('express');
const app = express();

app.get("/",(req, res) => {
    res.send('Hello World!')
});
app.get("/hello",(req, res) => {
    res.send('Hello to you too World!')
});

app.listen(3000, () =>{
    console.log('Server is now running at port 3000!')
})