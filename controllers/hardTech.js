const express = require('express');
const router = express.Router();
const HardTech = require('../models/hardTech');
const multer = require ('multer');
const path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/hardTech')
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ ".jpg")
    } 
  })  
   
  var upload = multer({ storage: storage })

  router.post('/', upload.single('techImage'), (req,res)=>{

        const hardTech  = new HardTech({

            techTitle: req.body.techTitle,
            techImage: req.file.filename,
            techDate : req.body.techDate,
            techLink : req.body.techLink,
            techPublisher: req.body.techPublisher

        }).save((err, newsUpdate)=>{
            if(err){
                console.log(err)
            }else{
                res.redirect('/admin/hardTech')
            }
        })
  } )


module.exports = router