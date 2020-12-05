const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const News = require('../models/news');
const hardTech = require('../models/hardTech');
const Testimonials = require('../models/testimonials');

router.get('/', (req,res)=>{
    res.render('admin/index', {
        title : 'homepage'
    })
})


router.get('/1s1', (req,res)=> {

    Event
    .find({eventCategory: '1s1'})
    .sort({eventDate : -1})
    .exec((err,event)=>{
            
        res.render('admin/1s1', { 
            title : 'One Student One Arduino',
            event:event
        })
    
    
})
})





router.get('/blog', (req,res)=> {
    res.render('admin/blog', {
        title : 'blog'
    })
})


router.get('/event', (req,res)=> {
    Event
        .find({})
        .sort({eventDate : -1})
        .exec((err, events)=>{

            Event
            .find({eventCategory : 'tick'})
            .sort({})
            .exec((err, eventTick)=>{

                Event
                .find({eventCategory : 'community'})
                .exec((err, eventCommunity)=>{

                    Event
                    .find({eventCategory : 'maker'})
                    .exec((err, eventMaker)=>{

                        Event
                        .find({eventCategory : '1s1'})
                        .exec((err, event1s1)=>{

            res.render('admin/event', {
                title : 'event',
                eventTick:eventTick,
                eventCommunity:eventCommunity,
                eventMaker:eventMaker,
                event1s1:event1s1,
                events:events
            })
        })

    })

})

})

    })

});


router.post('/eventDelete/:id', (req,res)=>{
    
    Event.findByIdAndRemove({_id : req.params.id}).then((Event)=>{
        res.redirect('/admin/event');
    })
  
  });


router.post('/testDelete/:id', (req,res)=>{
    
    Testimonials.findByIdAndRemove({_id : req.params.id}).then((Testimonials)=>{
        res.redirect('/admin/testimonials');
    })
  
  });


  router.post('/hardDelete/:id', (req,res)=>{
    
    hardTech.findByIdAndRemove({_id : req.params.id}).then((hardTech)=>{
        res.redirect('/admin/hardTech');
    })
  
  });
  

  router.post('/newsDelete/:id', (req,res)=>{
    
    News.findByIdAndRemove({_id : req.params.id}).then((News)=>{
        res.redirect('/admin/hardTech');
    })
  
  });
  

router.get('/hardtech', (req,res)=> {

    hardTech
        .find()
        .exec((err,hardTech)=>{

            res.render('admin/hardtech', {
                title : 'hardtech',
                hardTech:hardTech
            })
        })
})


router.get('/login', (req,res)=> {
    res.render('admin/login', {
        title : 'Auth'
    })
})


router.get('/maker', (req,res)=> {
    Event
        .find({eventCategory: 'maker'})
        .sort({eventDate : -1})
        .exec((err,event)=>{
            res.render('admin/maker', {
                title : 'maker',
                event:event
            })
        })
  
})

router.get('/news', (req,res)=> {
    News
        .find()
        .exec((err,news)=>{
            res.render('admin/news', {
                title : 'news',
                news:news
            })
        })
  
})

router.get('/testimonials', (req,res)=> {
    Testimonials
        .find()
        .exec((err,testimonials)=>{
            res.render('admin/testimonials', {
                title : 'testimonials',
                testimonials:testimonials
            });
        
        })
   
})

router.get('/tick', (req,res)=> {
    Event
    .find({eventCategory: 'maker'})
    .sort({eventDate : -1})
    .exec((err,event)=>{
  
        res.render('admin/tick', {
            title : 'tick',
            event:event
        })

    })

})

router.get('/publications' , (req,res)=>{
    res.render('admin/publications')
})

router.get('/community', (req,res)=>{
    Event
    .find({eventCategory: 'community'})
    .sort({eventDate : -1})
    .exec((err,event)=>{
        res.render('admin/community',{
            title:'community',
            event:event
        });
})
})


module.exports = router;