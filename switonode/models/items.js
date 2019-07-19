var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema here is method

var P = new Schema(    //Person is object 
      {name: String, price: String}  //name here is property and string is value
 
);

mongoose.model('items',P);      //to make a collection we use mongoose.model('<collectionName>',Object)

