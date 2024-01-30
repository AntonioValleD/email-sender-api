const express = require('express')
const cors = require('cors')

// Routes
const emailRoutes = require('./emails/email.routes')


const setUpMiddlewares = (app) => {
  // Set up cors middleware
  app.use(cors())

  // Set up json middleware
  app.use(express.json())

  // Set up routes
  app.use("/email", emailRoutes)
}


exports.setUpMiddlewares = setUpMiddlewares