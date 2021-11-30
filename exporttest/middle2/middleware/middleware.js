
const formidable = require("formidable");

const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

const middle1 = (req, res, next) => {
    // value1 = {}

    // global.value2;

    // res.locals.variablefrommiddle1insideparse = {}    



    // value1 = 'thisisvalue1!!!!'

    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }

        // console.log(fields)
        // console.log(files)

        global.value2 = 'viseth'
        console.log('from function2 middle2js line 25')
        // return   res.send(req.dataFromMiddleware1);

        // return value2


    })

    // form.parse(req)

    // form.on('file', function (name, fields){
    //     console.log('Uploaded ' + fields);
    // });

    // console.log(value1)
    // console.log(value2)

    next()

}

module.exports = middle1