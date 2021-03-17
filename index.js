const nodemailer = require('nodemailer')
require('dotenv').config()

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

const mailDetails = {
  from: process.env.EMAIL,
  to: 'abtestdev1@gmail.com',
  subject: 'Testing testing',
  text: 'Mailing from NODE'
}

mailTransporter.sendMail(mailDetails, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
