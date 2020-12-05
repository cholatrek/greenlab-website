const express = require('express');
const router = express.Router();
const News = require('../models/news');
const multer = require ('multer');
const path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/news')
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ ".jpg")
    } 
  })  
   
  var upload = multer({ storage: storage })

  router.post('/', upload.single('newsImage'), (req,res)=>{

        const news  = new News({

            newsTitle: req.body.newsTitle,
            newsImage: req.file.filename,
            newsDate : req.body.newsDate,
            newsContent: req.body.newsContent

        }).save((err, newsUpdate)=>{
            if(err){
                console.log(err)
            }else{
                res.redirect('/admin/news')
            }
        })
  } )

  router.get('/:id', (req,res)=>{
    News
      .findOne({_id : req.params.id})
      .exec((err,news)=>{
       res.render('singlenews', {
         news:news,
         title : 'SingleNews'
       })
      })
  })


module.exports = router