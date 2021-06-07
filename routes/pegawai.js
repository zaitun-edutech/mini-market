var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pegawai = require('../models/Pegawai');
var pegawai = require('../controllers/PegawaiController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
	Pegawai.find({}, function(err, pegawai){
		res.render('pegawai/index', { pegawai: pegawai, title: 'Data Pegawai' });
	});
});

router.get('/add', function(req, res, next){
	res.render('pegawai/add');					
});

router.post('/insert', function(req, res){
	pegawai.save(req, res);
});

router.get('/delete/:_id', function(req, res){
 	pegawai.delete(req, res);
});

router.get('/edit/:_id', function(req, res){
	pegawai.edit(req, res);
});

router.post('/update/:_id', function(req, res){
	pegawai.update(req, res);
});

module.exports = router;