var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var satuan = require('../controllers/SatuanController.js');

/* GET home page. */
router.get('/add', function(req, res, next) {
    res.render('satuan/index');
});

router.post('/insert', function(req, res){
  satuan.save(req, res);
});

router.get('/delete/:_id', function(req, res){
  satuan.delete(req, res);
});

router.get('/edit/:_id', function(req, res){
  satuan.edit(req, res);
});

router.post('/update/:_id', function(req, res){
  satuan.update(req, res);
});

module.exports = router;