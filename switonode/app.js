var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config= require('./config/database');
var mongoose =require('mongoose');
var fIndex=require('./routes/findex');
var lIndex=require('./routes/lindex');
var sIndex=require('./routes/sindex');
var bIndex=require('./routes/itindex');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



mongoose.connect(config.database);
let db = mongoose.connection;
//check connection
db.once('open',function()
{
  console.log('Connected to MongoDB');
});
//check for DB errors
db.on('error',function(err)
{
  console.group(err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/findex',fIndex);
app.use('/lindex',lIndex);
app.use('/sindex',sIndex);
app.use('/bindex',bIndex);
//app.use('/users', findexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
 
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
module.exports = app;
