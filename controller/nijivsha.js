const express = require('express');
const router = express.Router();
const surgeonModel = require('../model/contact');
const nodemailer = require('nodemailer');


router.get('/', (req, res) => {
    res.render('maintenance');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});


router.get('/about-us', (req, res) => {
    res.render('about-us');
});


router.get('/urine-container', (req, res) => {
    res.render('urine-container');
});

router.get('/edta-tube', (req, res) => {
    res.render('edta-tube');
});




router.post('/contact', async (req, res) => {

    const data = await surgeonModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        message: req.body.message
    });



    // const transporter = nodemailer.createTransport({
    //     service: "gmail",

    //     auth: {
    //         user: "me@gmail.com",
    //         pass: 8686,
    //     },
    // });


    // var message = {
    //     from: "sender@server.com",
    //     to: "receiver@sender.com",
    //     subject: "Message title",
    //     text: "Plaintext version of the message",
    //     html: "<p>HTML version of the message</p>",
    // };
    data.save();

})

module.exports = router;
