// // var express = require('express');
// // var router = express.Router();

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });

// // module.exports = router;
// var express = require('express');
// var router = express.Router();

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index',{
// //     title: 'Halaman Utama'
// //   });
// // });

// // router.get('/umum', function(req, res, next) {
// //   res.render('umum/index');
// // });

// // module.exports = router;
// var express = require('express');
// var router = express.Router();
// var Kategori = require('../models/Kategori');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index');
// });

// router.get('/umum', function(req, res, next) {
//    Kategori.find({}, function(err, kat){
//    res.render('umum/index', { kategori: kat, title: 'Data Umum' } );

//  });
// });

// module.exports = router;
var express = require('express');
var router = express.Router();
var Kategori = require('../models/Kategori');
var Satuan = require('../models/Satuan');
var Merk = require('../models/Merk');

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index');
});

router.get('/umum', function(req, res, next) {
   Kategori.find({}, function(err, kat){
   Satuan.find({}, function(err, sat){
    Merk.find({}, function(err, merk){
    res.render('umum/index', { kategori: kat, satuan: sat, merk: merk, title: 'Data Umum' } );
   });
   });
 });
 
 });

module.exports = router;