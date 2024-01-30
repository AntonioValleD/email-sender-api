const emailController = require('./email.controller')


const sendEmail = async (req, res) => {
  console.log('Sending email...')
  try {
    let email = await emailController.emailSender(req.body)
    return res.status(200).json({email: email})
  } catch (error) {
    return res.status(500).json({message: error})
  }
}


module.exports = {
  sendEmail
}