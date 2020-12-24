// Define schema
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Search = new Schema({
  name: Array,
  age:String
});

// Compile model from schema

module.exports = mongoose.model('Search', Search );
