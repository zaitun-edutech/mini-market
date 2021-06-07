var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pegawaiSchema = new Schema(
{
   nip: { type: String, required: true },
   nama: { type: String, required: true },
   email: { type: String, required: true },
   tempat_lahir: { type: String, required: true },
   tanggal_lahir: { type: Date, required: true },
   alamat: String ,
   jabatan: { type: String, required: true },
   gaji: { type: Number, required: true },
   jabatan: { type: String, required: true },
   password: { type: String, required: true }
},
{
   timestamps: true
}
);

module.exports = mongoose.model('pegawai', pegawaiSchema);