var mongoose = require('mongoose');
var crypto = require('crypto');

var Pegawai = require('../models/Pegawai');

var pegawaiController = {};

pegawaiController.save = function(req, res){
	
	var secret = 'brotherhood2013';
	var password = crypto.createHmac('sha256', secret).update(req.body.password).digest('hex');
	
	var pegawai = new Pegawai({
	 nip: req.body.nip,
	 nama: req.body.nama,
	 email: req.body.email,
	 tempat_lahir: req.body.tempat_lahir,
	 tanggal_lahir: req.body.tanggal_lahir,
	 alamat: req.body.alamat,
	 jabatan: req.body.jabatan,
	 gaji: req.body.gaji,
	 password: password
	});

	pegawai.save(function(err){
		if(err){ 
			console.log(err);
			res.redirect('/pegawai');
		}else{
		        console.log('save sukses');
		        res.redirect('/pegawai');
		}
	})
}

pegawaiController.delete = function(req, res){
	Pegawai.findOne({ _id: req.params._id }, function(err, row){
		if(row){
			Pegawai.remove({ _id: req.params._id }, function(err){
			if(err){								  							console.log('delete error', err);			  						        }else{																console.log('delete sukses');
				res.redirect('http://localhost:3000/pegawai');
			}
			});
		}else{
		        res.redirect('/pegawai');
		}
	});

}

pegawaiController.edit = function(req, res){
	var id = req.params._id;
	Pegawai.findOne({ _id: id }, function(err, pegawai){
		if(pegawai){
			res.render('pegawai/edit', { pegawai: pegawai, title: 'Form Edit Pegawai' });		
		 }else{
		        res.redirect('../');
		 }
	});
}

pegawaiController.update = function(req, res){
	Pegawai.findByIdAndUpdate(req.params._id, {
		$set: {
			nip: req.body.nip,
			nama: req.body.nama,
			email: req.body.email,
			tempat_lahir: req.body.templat_lahir,
			tanggal_lahir: req.body.tanggal_lahir,
			alamat: req.body.alamat,
			jabatan: req.body.jabatan,
			gaji: req.body.gaji
					
		}
	}, { multi: true }, function(err, pegawai){
		if(err){
			console.log(err);
			res.render('edit', { pegawai: req.body });
		}
			if(req.body.password){
				var secret = 'brotherhood2013';
				var password = crypto.createHmac('sha256', secret).update(req.body.password).digest('hex');
				console.log(password);
				Pegawai.findByIdAndUpdate(req.params._id, {
				$set: { password: password }
				}, { multi: true }, function(err, result){

				})
			}
			res.redirect('/pegawai');
	})
}

module.exports = pegawaiController;