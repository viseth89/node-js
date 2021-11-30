const function3 = (req, res, next) => {
    console.log('function3')

    console.log('res.locals.files2 from function3')
    console.log(res.locals.files2)

    next()


}

module.exports = function3