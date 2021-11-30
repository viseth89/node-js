const formidable = require("formidable");

const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

const middle2 = (req, res, next) => {
    console.log('this is middleware2 - line 9')
    // console.log(variablefrommiddle1)
    // console.log(res.locals.variablefrommiddle111)
    // console.log(res.locals.variablefrommiddle1insideparse)





    console.log('18')
    // console.log(value1)
    console.log('20')
    // console.log(value2)
    console.log(global.value2)
    // console.log(files)




    next()
}

module.exports = middle2