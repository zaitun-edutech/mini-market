var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var barangSchema = new Schema(
 {
  kode: { type: String, required: true },
  nama: { type: String, required: true },
  singkatan: { type: String, required: true },
  id_kategori: { type: Schema.Types.ObjectId, ref: 'kategori', required: true },
  id_satuan: { type: Schema.Types.ObjectId, ref: 'satuan', required: true },
  id_merk: { type: Schema.Types.ObjectId, ref: 'merk', required: true },
  harga_jual: { type: Number, required: true },
 }
);

module.exports = mongoose.model('barang', barangSchema);