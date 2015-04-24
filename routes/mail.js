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

router.get('/send/:email/:subject/:message', function (req, res) {

    var email = req.param('email');
    var subject = req.param('subject');
    var message = req.param('message');
    transporter.sendMail({
        from: "ProjectArduino Cphbusiness<projectarduinocphbusiness@gmail.com>", // sender address
        to: email, // comma separated list of receivers
        subject: subject, // Subject line
        text: message // plaintext body
    }, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            res.header("Content-type", "application/json");
            res.end("SENT :" + email + " " + subject + " " + message);

        }
    });
});


module.exports = router;
