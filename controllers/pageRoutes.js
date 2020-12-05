const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const News = require('../models/news');
const hardTech = require('../models/hardTech');
const Testimonials = require('../models/testimonials');


router.get('/', (req,res)=>{
    Testimonials
        .find()
        .sort({tesDate : -1})
        .exec((err,testimonials)=>{
            res.render('index', {
                title : 'homepage',
                testimonials:testimonials
            })
        })
   
})

router.get('/about', (req,res)=> {
    res.render('about', {
        title : 'about'
    }) 
})

router.get('/news', (req,res)=> {
    News
        .find()
        .sort({newsDate : -1})
        .exec((err,newsUpdate)=>{

            hardTech
                .find()
                .sort({techDate : -1})
                .exec((err,hardTech)=>{

                    res.render('news', {
                        title : 'News',
                        newsUpdate:newsUpdate,
                        hardTech:hardTech
                    });

                });
           
        })
   
})



router.get('/testimonials', (req,res)=> {
    Testimonials
        .find()
        .sort({tesDate : -1})
        .exec((err,testimonials)=>{
            res.render('testimonial', {
                title : 'Testimonial',
                testimonials:testimonials
            })
        })
   
})


router.get('/events', (req,res)=> {

    Event
        .find({ eventCategory : 'tick' })
        .sort({ eventDate : -1} )
        .exec((err,eventTick)=>{
            Event
                .find({ eventCategory : 'community' })
                .sort({eventDate : -1})
                .exec((err,eventCommunity)=>{

                    Event
                    .find({ eventCategory : 'maker' })
                    .sort({ eventDate : -1} )
                    .exec((err,eventMaker)=>{

                        Event
                        .find({ eventCategory : '1s1' })
                        .sort({ eventDate : -1} )
                        .exec((err,event1s1)=>{

                             res.render('events', {
                             title : 'Events and Publications',
                             eventTick:eventTick,
                             eventCommunity:eventCommunity,
                             event1s1:event1s1,
                             eventMaker:eventMaker
                        
                    })
                })


            })
            
        })
  

})

});




router.get('/contact', (req,res)=> {
    res.render('contact', {
        title : 'Contact'
    })
})


router.get('/idea', (req,res)=> {
    res.render('idea', {
        title : 'idea'
    })
})

module.exports = router;