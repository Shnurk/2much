var nodemailer = require('nodemailer')

var emailer = module.exports = {
  init,
  sendEmail
}

var transport = null

/**
 * config = {
 *   host: String
 *   port: Number
 *   secure: Boolean
 *   auth: { user: String, pass: String }
 * }
 */
function init (config) {
  transport = nodemailer.createTransport(config)
}

/**
 * params = {
 *   fromName: String
 *   fromEmail: String
 *   to: String // e.g. "one@s.ru" or "one@s.ru, two@b.ru"
 *   subject: String
 *   text: String
 *   html: HTML
 * }
 */
function sendEmail(params) {
  var opts = {
    from: `"${params.fromName}" <${params.fromEmail}>`,
    to: params.to,
    subject: params.subject,
    text: params.text,
    html: params.html
  }

  transport.sendMail(opts, (error, info) => {
    if (error) {
      console.error('EMAIL ERROR')
      console.error(error)
      return
    }
  })
}
