var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema here is method

var P = new Schema(    //Person is object 
     {email: String }
);

mongoose.model('emails',P);      //to make a collection we use mongoose.model('<collectionName>',Object)

