var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
require('../models/forgot');
var mongoose = require('mongoose');
var P = mongoose.model('emails');

router.post('/add', function(req, res) {
  new P({
    email : req.body.email,
    }
)
.save(function(err, P) {
    console.log(P)   //terminal print
    res.json(P);     //Print in Postman 
  });
});


module.exports = router;