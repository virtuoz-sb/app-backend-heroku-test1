const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/test', (req, res) => {
    res.send('---test');
  })
  .get('/email', (req, res) => {
    // Step 1
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'no-reply@praesideo.earth', // TODO: your gmail account
          pass: 'cxykikmdwydckxit' // TODO: your gmail app password
          // pass: 'praesideo@#$' // TODO: your gmail login password
          // user: 'cebikinsweb@gmail.com', // TODO: your gmail account
          // pass: 'vtrrpfhcjitxxxpx' // TODO: your gmail password
          // user: 'sbgoldenstar@gmail.com', // TODO: your gmail account
          // pass: 'whjfarrcqnusnzdy' // TODO: your gmail password          
      }
    });

    // Step 2
    let mailOptions = {
      // from: 'no-reply@praesideo.earth', // TODO: email sender
      // from: 'cebikinsweb@gmail.com', // TODO: email sender
      // to: 'sbgoldenstar@gmail.com', // TODO: email receiver
      from: 'no-reply@praesideo.earth', // TODO: email sender
      to: 'virtuoz.sb@gmail.com', // TODO: email receiver
      subject: 'Nodemailer - Test',
      text: 'Wooohooo it works!!'
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          console.log('Error occurs:', err.message);
          res.send(`Error occurs: ${err.message}`);
      }
      console.log('Email sent!!!');
      res.send("Email sent");
    });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
