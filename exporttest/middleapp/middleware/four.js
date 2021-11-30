const formidable = require("formidable");

const form = formidable({
    multiples: true,
    keepExtensions: true,
  });


const four = (req, res, next) => {
    console.log('four')
    var viseth = 'visethsen'
    res.locals.viseth = 'visethsenres'
    // console.log(viseth)
    // console.log(res.locals.viseth)
    console.log('line 15 before the form.parse')
    console.log('four')
    // form.parse(req, (err, fields, files) => {
    //     console.log('before parsing')
    //     // if (err) {
    //     //   next(err);
    //     //   return;
    //     // }

    //     console.log(fields)
    //     console.log(files)
    //     console.log('from four parsing')
    // })


    console.log('line 30 before the form.parse')

    next()

}

module.exports = four