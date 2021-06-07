// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//    res.render('barang/index');
// });

// module.exports = router;var express = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var barang = require('../controllers/BarangController.js');
var Barang = require('../models/Barang');
var Kategori = require('../models/Kategori');
var Satuan = require('../models/Satuan');
var Merk = require('../models/Merk');
/* GET home page. */
router.get('/', function(req, res, next) {
	Barang.find({}, function(err, barang){
	  res.render('barang/index', { barang: barang, title: 'Data Barang' });
	}).populate('id_kategori id_satuan id_merk');
});

router.get('/add', function(req, res, next){
	Kategori.find({}, function(err, kategori){
		Satuan.find({}, function(err, satuan){
			Merk.find({}, function(err, merk){
				res.render('barang/add', { kategori: kategori, satuan: satuan, merk: merk });
	
			});
		});
	});
});

router.post('/insert', function(req, res){
	barang.save(req, res);
});

router.get('/delete/:_id', function(req, res){
		  barang.delete(req, res);
});

router.get('/edit/:_id', function(req, res){
		  barang.edit(req, res);
});

router.post('/update/:_id', function(req, res){
		  barang.update(req, res);
});

module.exports = router;

