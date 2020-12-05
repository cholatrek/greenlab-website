const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const multer = require ('multer');
const path = require('path');
const fs = require('fs');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ ".jpg")
    }
  })  
   
  var upload = multer({ storage: storage })

router.post('/eventPost', upload.array('eventImages', 8), (req,res)=>{
    console.log(req.files)
    // res.send(req.files)
    const event = new Event({
        eventTitle : req.body.eventTitle,
        eventDate : req.body.eventDate,
        eventExcerpt : req.body.eventExcerpt,
        eventCategory : req.body.eventCategory,
        eventImages : req.files
     
    }).save((err,event)=>{
                // console.log(req.files[0].filename)
                res.redirect('/admin/event')
            });

            
})




router.get('/tick', (req,res)=>{

    Event
    .find({ eventCategory : 'tick' })
    .sort({ eventDate : -1} )
    .exec((err,event)=>{
      res.render('category', {
        title : 'TICK STEM',
        event : event,
        categoryFull : 'TICK STEM'
      })
    })

});

router.get('/maker', (req,res)=>{

    Event
        .find({ eventCategory : 'maker' })
        .sort()
        .exec((err,event)=>{
          res.render('category', {
            title : 'Maker Exhibition',
            event : event,
            categoryFull : 'MAKER EXHIBITION'
          })
        })

    // res.send(req.params.category);
  
    
    
});

router.get('/1s1', (req,res)=>{

      Event
      .find({ eventCategory : '1s1' })
      .sort()
      .exec((err,event)=>{
        res.render('category', {
          title : 'One Student One Arduino',
          event : event,
          categoryFull : 'ONE STUDENT ONE ARDUINO'
        })
      })

    
});

router.get('/community', (req,res)=>{

    Event
    .find({ eventCategory : 'community' })
    .sort()
    .exec((err,event)=>{
      res.render('category', {
        title : 'Maker Exhibition',
        event : event,
        categoryFull : 'COMMUNITY PROJECT'
      })
    })

    
});

module.exports = router;