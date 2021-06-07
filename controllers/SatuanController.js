var mongoose = require('mongoose');
var Satuan = require('../models/Satuan');

var satuanController = {};

satuanController.save = function(req, res){
  var satuan = new Satuan(req.body);

  satuan.save(function(err){
     if(err){
         console.log(err);
         res.render('/umum');
        }else{
            console.log('save sukses');
            res.redirect('/umum');
           }
    })

}

satuanController.delete = function(req, res){
  Satuan.findOne({ _id: req.params._id }, function(err, row){
     if(row){
         Satuan.remove({ _id: req.params._id }, function(err){
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

satuanController.edit = function(req, res){
  var id = req.params._id;
  Satuan.findOne({ _id: id }, function(err, sat){
     if(sat){
         res.render('satuan/edit_satuan', { satuan: sat, title: 'Form Edit Satuan' });
        }else{
            res.redirect('../');

           }
    });
}

satuanController.update = function(req, res){
  Satuan.findByIdAndUpdate(req.params._id, {
     $set: {
         nama: req.body.nama
        }
    }, { new: true }, function(err, sat){
       if(err){
           console.log(err);
           res.render('edit_satuan', { satuan: req.body });
          }
       res.redirect('/umum');
      })
}

module.exports = satuanController;