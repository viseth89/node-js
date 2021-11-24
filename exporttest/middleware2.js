var express = require('express');
var app = express();

const setRequestInfo = (text) => {
  return (req, res, next) => {
    req.requestInfo = text;
    if(text=='Viseth'){
        res.send('Hi there! Viseth ');

    } else if(text=='Cocoa') {
        res.send('Hi there! Cocoa ');

    } else if(text=='Sadie'){
        res.send('Hi there! Sadie Bear');

    } else {
        next();

    }
  };
};

app.get('/', setRequestInfo('Sadie'), (req, res) => {
  res.send('Hi there! requestInfo = ' + req.requestInfo);
});

app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000.`);
})