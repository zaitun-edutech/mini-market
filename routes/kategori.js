// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/add', function(req, res, next) {
//    res.render('kategori/index');
// });



// module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var kategori = require('../controllers/KategoriController.js');

/* GET home page. */
router.get('/add', function(req, res, next) {
   res.render('kategori/index');
});

router.post('/insert', function(req, res){
 kategori.save(req, res);
});

router.get('/delete/:_id', function(req, res){
 kategori.delete(req, res);
});

router.get('/edit/:_id', function(req, res){
 kategori.edit(req, res);
});

router.post('/update/:_id', function(req, res){
 kategori.update(req, res);
});

module.exports = router;