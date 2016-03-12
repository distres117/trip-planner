var express = require('express');
var app = express();

var swig = require('swig');
var path = require('path');
var bodyParser = require('body-parser');
var morgan     = require('morgan');


app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('node_modules'));

app.use(express.static('public'));
app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(require('./routes'));

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});

    res.render('error');
    // res.render(
    //     'error'
    // );
    // res.sendStatus(500);
});
module.exports = app;
