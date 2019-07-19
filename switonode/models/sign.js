var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema here is method

var Person = new Schema(    //Person is object 
      {name: String, email: String , canteenname: String, phone: String,password: String,address: String}  //name here is property and string is value
 
);

mongoose.model('signs',Person);      //to make a collection we use mongoose.model('<collectionName>',Object)

