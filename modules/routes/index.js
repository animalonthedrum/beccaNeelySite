var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');



router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'becca.neely1@gmail.com',
    pass: process.env.EMAIL_PASSWORD 
  }
});

router.post('/', function(req, res) {
  var mailer = req.body;
  console.log("this is mailer", mailer);



  var mailOptions = {
    from: '"Beccas Site" becca.neely1@gmail.com', // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
    to: 'becca.m.neely@gmail.com',
    subject: mailer.subject, // Subject line
    text: mailer.message, // plain text body
    html: '<p>' + 'name: ' + mailer.name + '<br>' + 'message: ' + mailer.message + '<br>' + 'email: ' + mailer.email + '</p>' // html body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.status(500).send(error);
      // return console.log(error);
    } else {
      res.sendStatus(200);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });


});

router.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
