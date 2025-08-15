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

router.get('/routine-container', (req,res)=>{
    res.render('routine-container');
});

router.get('/speciman-container', (req,res)=>{
    res.render('speciman-container');
});

router.get('/stool-container', (req,res)=>{
    res.render('stool-container');
});


router.get('/ria-vial', (req,res)=>{
    res.render('ria-vial');
});

router.get('/multi-purpose-vials', (req,res)=>{
    res.render('multi-purpose-vials');
});

router.get('/conical-centrifuge-tube', (req,res)=>{
    res.render('conical-centrifuge-tube');
});

router.get('/micro-centrifuge-cup', (req,res)=>{
    res.render('micro-centrifuge-cup');
});

router.get('/sodium-flouride-tube', (req,res)=>{
    res.render('sodium-flouride-tube');
});


router.get('/clot-activator-tube', (req,res)=>{
    res.render('clot-activator-tube');
});

router.get('/sodium-citrate', (req,res)=>{
    res.render('sodium-citrate');
});

router.get('/esr-tube', (req,res)=>{
    res.render('esr-tube');
});

router.get('/sst-tube', (req,res)=>{
    res.render('sst-tube');
});

router.get('/lithium-heparin', (req,res)=>{
    res.render('lithium-heparin');
});

router.get('/micro-pipette-tip', (req,res)=>{
    res.render('micro-pipette-tip');
});

router.get('/macro-pipette-tip', (req,res)=>{
    res.render('macro-pipette-tip');
});

router.get('/pasture-pipette', (req,res)=>{
    res.render('pasture-pipette');
});

router.get('/surgical-mask', (req,res)=>{
    res.render('surgical-mask');
});

router.get('/head-cap', (req,res)=>{
    res.render('head-cap');
});

router.get('/shoe-cover', (req,res)=>{
    res.render('shoe-cover');
});

router.get('/gown', (req,res)=>{
    res.render('gown');
});

router.get('/latex-glove', (req,res)=>{
    res.render('latex-glove');
});

router.get('/nitrile-glove', (req,res)=>{
    res.render('nitrile-glove');
});


router.get('/vaccum-tube', (req,res)=>{
    res.render('vaccum-tube');
});

router.get('/non-vaccum', (req,res)=>{
    res.render('non-vaccum');
});

router.get('/sodium-heparin-tube', (req,res)=>{
    res.render('sodium-heparin-tube');
});

router.get('/stip-bandage', (req,res)=>{
    res.render('stip-bandage');
});

router.get('/round-bandage', (req,res)=>{
    res.render('round-bandage');
});

router.get('/micro-pore-paper-tape', (req,res)=>{
    res.render('micro-pore-paper-tape');
});

router.get('/hypo-allergic-tape', (req,res)=>{
    res.render('hypo-allergic-tape');
});

router.get('/alcohol-swab', (req,res)=>{
    res.render('alcohol-swab');
});

router.get('/hand-sanitizer', (req,res)=>{
    res.render('hand-sanitizer');
});

router.get('/cotton-rolls', (req,res)=>{
    res.render('cotton-rolls');
});

router.get('/sputum-container', (req,res)=>{
    res.render('sputum-container');
});

router.get('/self-standing-centrifuge-tube', (req,res)=>{
    res.render('self-standing-centrifuge-tube');
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
module.exports= router;
