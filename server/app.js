require("dotenv").config()
const Express = require('express')
const app = Express();
const dbConnection = require('./db')
const cors = require("cors");
app.use(require("./middleware/headers"))
app.use(cors())
const controllers = require('./controllers');

app.use(Express.json())

app.use('/user', controllers.userController);

// app.use(require("./middleware/validate-jwt"))
app.use('/journal', controllers.journalController);

app.use('/test', (req, res) => {
    res.send('This is a message from the test endpoint on the server!')
})

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000.`);
        })
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`)
    })

// app.listen(3000, () => {
//     console.log(`[Server]: App is listening on 3000`)
// })