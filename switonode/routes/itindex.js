var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
require('../models/items');
var mongoose = require('mongoose');
var P = mongoose.model('items');

router.post('/add', function(req, res) {
  new P({
    name : req.body.name,
    price : req.body.price
    }
)
.save(function(err, P) {
    console.log(P)   //terminal print
    res.json(P);     //Print in Postman 
  });
});

router.get('/view', function(req,res){
    P.find(function(err,P){
      console.log(P)
      res.json(P);
    })
  })
  router.put('/update/:id', function(req, res) {
    var query = {"_id": req.params.id};
    var update = {name : req.body.name, 
      price : req.body.price}
     
    var options = {new: true};
    P.findOneAndUpdate(query, update, options, function(err, Person){
      console.log(P)
      res.json(P);
    });
  });
   
  router.get('/delete/:id', function(req, res) {
    var query = {"_id": req.params.id};
    P.findOneAndRemove(query, function(err, P){
      console.log(P)
      res.json(P);
    });
  });

module.exports = router;