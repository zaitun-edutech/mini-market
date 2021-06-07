var mongoose = require('mongoose');
var Merk = require('../models/Merk');

var merkController = {};

merkController.save = function(req, res){
 var merk = new Merk(req.body);

 merk.save(function(err){
  if(err){ 
   console.log(err);
   res.render('/umum');
  }else{
   console.log('save sukses');
   res.redirect('/umum');
  }
})

}

merkController.delete = function(req, res){
 Merk.findOne({ _id: req.params._id }, function(err, row){
  if(row){
   Merk.remove({ _id: req.params._id }, function(err){
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

merkController.edit = function(req, res){
 var id = req.params._id;
 Merk.findOne({ _id: id }, function(err, merk){
  if(merk){
   res.render('merk/edit_merk', { merk: merk, title: 'Form Edit Merk' });
  }else{
   res.redirect('../');
  }
});
}

merkController.update = function(req, res){
 Merk.findByIdAndUpdate(req.params._id, {
  $set: {
   nama: req.body.nama
  }
 }, { new: true }, function(err, merk){
 if(err){
  console.log(err);
  res.render('edit_merk', { merk: req.body });
 }

 res.redirect('/umum');
})
}

module.exports = merkController;