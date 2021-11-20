const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt")

router.get('/practice', validateJWT, (req, res) => {
    res.send("Hey!! This is practice route!")
})

router.get('/about', (req, res) => {
    res.send('This is the about route')
})

module.exports = router