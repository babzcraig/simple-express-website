var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('contact', { title: 'Bab\'s sample Express Web App', activeClass: 'Contact' });
});

router.post('/send', function(req,res) {
   var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'babscraig@gmail.com',
           pass: '7millDec31!@'
       }
   });
    var mailOptions = {
        from: "John Doe \<johndoe@outlook.com\>",
        to: 'babscraig@gmail.com',
        subject: 'Website Submission',
        text: 'You have a submission with the following details...Name: ' + req.body.name + '. Message: ' + req.body.message,
        html: '<p>You got a new submission with the following details.</p><ul><li>Name: '+ req.body.name + '</li><li>Message: ' + req.body.message  + '</li></ul>'
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err);
            res.redirect('/')
        }
        else {
            console.log("Message Sent: " + info.response);
            res.redirect('/');
        }
    })
});

module.exports = router;
