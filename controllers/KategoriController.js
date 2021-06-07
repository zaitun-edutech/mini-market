var mongoose = require('mongoose');
var Kategori = require('../models/Kategori');

var kategoriController = {};

kategoriController.save = function(req, res){
 var kategori = new Kategori(req.body);

 kategori.save(function(err){
  if(err){
   console.log(err);
   res.render('/umum');
  }else{
   console.log('save sukses');
   res.redirect('/umum');
  }
 })

}

kategoriController.delete = function(req, res){
 Kategori.findOne({ _id: req.params._id }, function(err, row){
  if(row){
   Kategori.remove({ _id: req.params._id }, function(err){
    if(err){
     console.log('delete error', err);
    }else{
     console.log('delete sukses');
     res.redirect('http://localhost:3000/umum');
    }
   });
  }else{
   res.redirect('/umum');
  }
 });

}

kategoriController.edit = function(req, res){
 var id = req.params._id;
 Kategori.findOne({ _id: id }, function(err, kat){
  if(kat){
   res.render('kategori/edit_kategori', { kategori: kat, title: 'Form Edit Kategori' });
  }else{
   res.redirect('../');

  }
 });
}

kategoriController.update = function(req, res){
 Kategori.findByIdAndUpdate(req.params._id, {
  $set: {
   nama: req.body.nama
  }
 }, { new: true }, function(err, kat){
  if(err){
   console.log(err);
   res.render('edit_kategori', { kategori: req.body });
  }
  res.redirect('/umum');
 })
}

module.exports = kategoriController;