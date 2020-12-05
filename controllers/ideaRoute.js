const express = require('express');
const router = express.Router();
const Idea = require('../models/ideas');
const Contact = require('../models/contact');
const multer = require ('multer');
const path = require('path');
const fs = require('fs');


router.post('/idea', (req,res)=>{

        const idea  = new Idea({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email : req.body.email,
            relatedCategory: req.body.relatedCategory,
            message : req.body.message

        }).save((err, idea)=>{
            if(err){
                console.log(err)
            }else{
                res.redirect('/')
            }
        })
  } )


  router.post('/contact', (req,res)=>{

    const contact  = new Contact({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email : req.body.email,
        relatedProblems: req.body.relatedProblems,
        message : req.body.message

    }).save((err, idea)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
        }
    })
} )


module.exports = router