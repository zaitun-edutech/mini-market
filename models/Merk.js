var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var merkSchema = new Schema(
 {
  nama: { type: String, require: true }
 }
);

module.exports = mongoose.model('merk', merkSchema);