const jwt = require("jsonwebtoken")
const { UserModel } = require("../models")

const validateJWT = async( req, res, next) => {
    if (req.method == "OPTIONS") {
        next();
    } else if (
        req.headers.authorization &&
        req.headers.authorization.includes("Bearer")
    ) {
        const { authorization } = req.headers;
        // console.log("authorization -->", authorization)
        const payload = authorization
        ? jwt.verify(
            authorization.includes("Bearer")
                ? authorization.split(" ")[1]
                : authorization,
            process.env.JWT_SECRET
        )
        : undefined;

        // console.log("payload -->", payload)

        if(payload) {
            let foundUser = await UserModel.findOne({ where: { id: payload.id } })

            if(foundUser) {
                // console.log("foundUser -->", foundUser)
                req.user = foundUser;
                next();
            } else {
                res.status(400).send({ message: "Not Authorized"})
            }
        } else {
            res.status(401).send({ message: "Invalid Token"})
        }
    } else {
        res.status(403).send({ message: "Forbidden"})
    }
}

validateJWT()
module.exports = validateJWT