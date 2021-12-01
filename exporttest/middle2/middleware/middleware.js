
const formidable = require("formidable");

const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  sadie = 'saiee'
const middle1 = (req, res, next) => {




    // value1 = {}

    // global.value2;

    // res.locals.variablefrommiddle1insideparse = {}    



    value1 = 'thisisvalue1!!!!'
    var value2;

    const testcb = (value) => {
      console.log('this is the test callback from line 27!!!!!!!!!!!!!!!!!')
      console.log(value)
    }
    
    c = testcb()


    form.parse(req, (err, fields, files, c) => {
        if (err) {
          next(err);
          return;
        }

        value2 = fields
        console.log(fields)
        console.log(value2)
        console.log('line35 in middleware')
        c(value2)
        // console.log(files)

        // global.value2 = 'viseth'
        // console.log('from function2 middle2js line 25')
        // return   res.send(req.dataFromMiddleware1);

        // return value2




    })

    // form.parse(req)

    // form.on('file', function (name, fields){
    //     console.log('Uploaded ' + fields);
    // });

    console.log(value1)
    console.log(value2)
    console.log(value2)
    console.log('line54')

    setTimeout(() => {
      console.log(value2)
      console.log(value2)
      console.log('line61')
        }, 3000);


    setTimeout(() => {
      console.log('hey')
},3000)

    next()

}

module.exports = middle1