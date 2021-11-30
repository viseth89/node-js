const formidable = require("formidable");

const form = formidable({
  multiples: true,
  keepExtensions: true,
});

const middleware1 = (req, res, next) => {
  res.locals.files2 = {};
  res.locals.tyson = {};

  console.log("middleware1");
  var viseth = "visethsen";
  res.locals.viseth = "visethsenresFROM LINE 14";
  res.locals.viseth2 = "viseth2 FROM LINE 15";
  // console.log(viseth)
  // console.log(res.locals.viseth)
  console.log("line 15 before the form.parse");
  console.log("middleware1");
  form.parse(req, (err, fields, files) => {
    console.log("before parsing");
    // if (err) {
    //   next(err);
    //   return;
    // }

    console.log(fields);
    console.log(files);
    console.log("from middleware1 parsing");
    res.locals.files2 = files;
    res.locals.tyson = "tyson";
  });
  res.locals.tyson3 = "tyson3";
  res.locals.visethsen = "visethsenresFROMLINE33";

  req.dataFromMiddleware1 = "Data of Middleware 1 line 36!!!!!!!!!!!!!!!!!!!!!!!!!!!";



  console.log(
    "line 30 AFTER--------------------------------------------------------------------"
  );

  next();
};

module.exports = middleware1;
