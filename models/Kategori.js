var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var kategoriSchema = new Schema(
 {
  nama: { type: String, require: true }
 }
);

module.exports = mongoose.model('kategori', kategoriSchema);