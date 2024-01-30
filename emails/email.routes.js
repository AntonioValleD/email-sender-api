const router = require('express').Router()

// Http handler
const emailHttpHandler = require('./email.http')


router.route('/send')
  .post(emailHttpHandler.sendEmail)


module.exports = router