var nodemailer = require('nodemailer')

var EmailCtrl = module.exports = {
  manage (app) {
    initTransporter()
  }
}

var transporter

function initTransporter () {
  transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: { user: 'imkost', pass: 'hhfdgr54' }
  })
}

function sendEmail({ fromName, fromEmail, to, subject, text }) {
  var opts = {
    from: `"${fromName}" <${fromEmail}>`,
    to, subject, text, html: text
  }

  transporter.sendMail(opts, (error, info) => {
    if (error) {
      console.error('EMAIL ERROR')
      console.error(error)
      return
    }
  })
}
