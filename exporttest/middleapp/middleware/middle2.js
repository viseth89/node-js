const formidable = require("formidable");

const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

const function2 = (req, res, next) => {
    console.log('function2 9 ')
    console.log(res.locals.viseth)

    console.log('function2 10')
    console.log(res.locals.files2)
    console.log('function2 14')
    console.log(res.locals.tyson)
    console.log('function2 16')
    console.log(res.locals.tyson2)
    console.log('function2 18')
    console.log(res.locals.tyson3)
    console.log('function2 20')
    console.log(res.locals.visethsen)
    console.log('function2 22')
    console.log(res.locals.viseth2)
    console.log('function2 24')
    console.log(req.dataFromMiddleware1);
    console.log('req line 26')


    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }

        console.log(fields)
        console.log(files)
        console.log('from function2 middle2js line 37')
        // return   res.send(req.dataFromMiddleware1);


    })

    console.log(res.locals.files2)
    console.log('line26 res.locals - function2')
    next()
}

module.exports = function2