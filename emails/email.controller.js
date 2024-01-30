const Resend = require('resend').Resend
const dotenv = require('dotenv')


dotenv.config()

const emailSender = (emailInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resend = new Resend(process.env.API_KEY)

      resend.emails.send({
        from: "portfolio.contact@resend.dev",
        to: "juan.valle.d1@gmail.com",
        subject: "Welcome to Resend",
        text: `
          Name: ${emailInfo.name}
          Company: ${emailInfo.company}
          Email: ${emailInfo.email}
          Message: ${emailInfo.message}
        `
      })
      console.log('Email sent!')
      return resolve('Email sent!')
    } catch (error) {
      console.log('Error sending email')
      return reject(error)
    }
  })
}


module.exports = {
  emailSender
}