const function1 = (req, res, next) => {
    console.log('function1')
    var viseth = 'viseth'
    res.locals.viseth = 'visethres'
    console.log(viseth)
    console.log(res.locals.viseth)
    next()

}

module.exports = function1