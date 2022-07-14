const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middleware/error-handler')

const router = require('./router')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
const PORT = process.env.PORT || 3000

app.use('/api', router)

app.use(errorHandler())

app.listen(PORT, () => {
  console.log('Server is running');
})
