const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/contact', (req,res)=>{
    res.render('contact');
});


router.get('/about-us', (req,res)=>{
    res.render('about-us');
});


router.get('/urine-container', (req,res)=>{
    res.render('urine-container');
});

router.get('/edta-tube', (req,res)=>{
    res.render('edta-tube');
});

module.exports= router;
