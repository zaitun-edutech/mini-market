var mongoose = require('mongoose');
var Barang = require('../models/Barang');
var Kategori = require('../models/Kategori');
var Satuan = require('../models/Satuan');
var Merk = require('../models/Merk');

var barangController = {};

barangController.save = function(req, res){
	 var barang = new Barang(req.body);

	 barang.save(function(err){
		   if(err){ 
			      console.log(err);
			      res.redirect('/barang');
			     }else{
				        console.log('save sukses');
				        res.redirect('/barang');
				       }
	 })

}

barangController.delete = function(req, res){
	 Barang.findOne({ _id: req.params._id }, function(err, row){
		   if(row){
			      Barang.remove({ _id: req.params._id }, function(err){
				          if(err){
						       console.log('delete error', err);
						      }else{
							           console.log('delete sukses');
							           res.redirect('http://localhost:3000/barang');
							          }
				         });

			     }else{
				        res.redirect('/barang');
				       }
	 });

}

barangController.edit = function(req, res){
	 var id = req.params._id;
	 Barang.findOne({ _id: id }, function(err, barang){
		 if(barang){
			Kategori.find({}, function(err, kat){
			 Kategori.findOne({ _id:barang.id_kategori }, function(err, k){
			  Satuan.find({}, function(err, sat){
			   Satuan.findOne({ _id:barang.id_satuan }, function(err, s){
		  	    Merk.find({}, function(err, merk){
			     Merk.findOne({ _id:barang.id_merk }, function(err, m){
				res.render('barang/edit_barang', { barang: barang, kategori: kat, satuan: sat, merk:merk, k:k, s:s, m:m, title: 'Form Edit Barang' });
			     });
			    });
			   });
			  });
			 });
			});


			     }else{
				        res.redirect('../');
				       }
	 });
}

barangController.update = function(req, res){
	 Barang.findByIdAndUpdate(req.params._id, {
		   $set: {
			      nama: req.body.nama,
			      singkatan: req.body.singkatan,
			      id_kategori: req.body.id_kategori,
			      id_satuan: req.body.id_satuan,
			      id_merk: req.body.id_merk,
			      harga_jual: req.body.harga_jual
			     }
		  }, { new: true }, function(err, barang){
			   if(err){
				     console.log(err);
				     res.render('edit_barang', { barang: req.body });
				    }

			   res.redirect('/barang');
		  })
}

module.exports = barangController;