var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer");

var opts = {
  service: "Gmail",
  auth: {
    user: "projectarduinocphbusiness@gmail.com",
    pass: "pranitmadalinanikos"
  }
}

var transporter = nodemailer.createTransport(opts);

router.get('/send/:email/:subject/:message', function (req, res)

{


  var a = "got the get ";

  var email = req.param('email');
  var subject = req.param('subject');
  var message = req.param('message');

  var b = "got the params ";
  var c = "sent mail ";
  transporter.sendMail({
    from: "ProjectArduino Cphbusiness<projectarduinocphbusiness@gmail.com>", // sender address
    to: email, // comma separated list of receivers
    subject: subject, // Subject line
    text: message // plaintext body
  }, function (error, response) {
    if (error) {
      console.log(error);
    } else {


    }
  });

  res.header("Content-type", "application/json");
  //res.send(a + b);


  res.end(a + b + c);


});


module.exports = router;
