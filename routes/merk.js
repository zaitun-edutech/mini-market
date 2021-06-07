var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var merk = require('../controllers/MerkController.js');

/* GET home page. */
router.get('/add', function(req, res, next) {
     res.render('merk/index');
});

router.post('/insert', function(req, res){
   merk.save(req, res);
});

router.get('/delete/:_id', function(req, res){
   merk.delete(req, res);
});

router.get('/edit/:_id', function(req, res){
   merk.edit(req, res);
});

router.post('/update/:_id', function(req, res){
   merk.update(req, res);
});

module.exports = router;