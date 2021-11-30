const function2 = (req, res, next) => {
    console.log('function2')
    // console.log(viseth)
    console.log(res.locals.viseth)
    console.log(res.locals.viseth)

    next()
}

module.exports = function2