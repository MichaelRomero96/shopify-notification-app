const express = require('express')
const router = require('./routes/index.js')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 4001

//adding router
app.use('/', router)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})