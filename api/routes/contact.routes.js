const express = require('express'),
      router = express.Router(),
      nodemailer = require('nodemailer'),
      transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: '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',
        }
      })

router.route("/")
  .post((req, res) => {
    transporter.sendMail({
      from: `"${req.body.params.name}" <${req.body.params.email}>`,
      to: `contact@mytaxhelpers.com`,
      // to: `onyx18121990@gmail.com`,
      subject: 'Contact Us from https://mytaxhelpers.com/',
      html: `${req.body.params.message}`
    })
      .then(response => {
        res.send({
          status: 'success',
          msg: 'We will answer you shortly!'
        })
      })
      .catch(error => {
        res.send({
          status: 'error',
          msg: error
        })
      })
  })

module.exports = router