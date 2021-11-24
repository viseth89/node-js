var express = require('express');
var app = express();

const setRequestInfo = (text) => {
  return (req, res, next) => {
    req.requestInfo = text;
    next();
  };
};

app.get('/', setRequestInfo('Viseth'), (req, res) => {
  res.send('Hi there! requestInfo = ' + req.requestInfo);
});

app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000.`);
})