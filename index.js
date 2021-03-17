const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our messages')
  }
})

const mailDetails = {
  from: process.env.EMAIL,
  to: 'abtestdev1@gmail.com',
  subject: 'Testing testing',
  text: 'Mailing from NODE'
}

transporter.sendMail(mailDetails, (err, data) => {
  if (err) {
    console.log(err)
  }

  console.log(data)
  console.log('Email sent succesfully.')
})
