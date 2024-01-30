const express = require('express')
const dotenv = require('dotenv')
const middlewares = require('./middlewares')


// App config
dotenv.config()
const app = express()
const port = process.env.PORT 

// Middlewares
middlewares.setUpMiddlewares(app)


// App init
app.get('/', (req, res) => {
  res.send(`Server running on port ${port}`)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})