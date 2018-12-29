const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const mazShema = new Schema({
  name: String
});

var Maz = module.exports = mongoose.model('Maz', mazShema)