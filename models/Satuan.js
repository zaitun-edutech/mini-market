var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var satuanSchema = new Schema(
 {
  nama: { type: String, require: true }
 }
);

module.exports = mongoose.model('satuan', satuanSchema);