const express = require('express');
const router = express.Router();
const Testimonials = require('../models/testimonials');
const multer = require ('multer');
const path = require('path');
const fs = require('fs');
 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/testimonial')
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ ".jpg")
    }
  })  
   
  var upload = multer({ storage: storage })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

router.post('/', upload.single('testImage'), (req,res)=>{

    const testimonial = new Testimonials({
    testName: req.body.testName,
    testimony: req.body.testimony,
    testImage: req.file.filename,

    
    }).save((err,testimonial)=>{
        if(err){
            console.log(err)
        }else{
            console.log(req.file)
            res.redirect('admin/testimonials')
        }
    })
})

module.exports = router;