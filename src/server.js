const express = require('express')
const morgan = require('morgan')

const PORT = 5000
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('/app/swagger_output.json')
// Error handling Middleware function for logging the error message
const errorLogger = (error, request, response, next) => {
  console.log( `error ${error.message}`) 
  next(error) // calling next middleware
}

// Error handling Middleware function reads the error message 
// and sends back a response in JSON format
const errorResponder = (error, request, response, next) => {
  response.header("Content-Type", 'application/json')
    
  const status = error.status || 400
  response.status(status).send("Bad Request Code " + status)
}

// Fallback Middleware function for returning 
// 404 error for undefined route
const invalidPathHandler = (request, response, next) => {
  response.status(404)
  response.send('Invalid Route')
}

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/', require('./route/routes'))
app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}/videos/1`))
