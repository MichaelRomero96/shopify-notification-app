import express from 'express'
import router from './routes/index.js'
import './loadEnv.js'


const app = express()

const port = process.env.PORT || 4000

//adding router
app.use('/', router)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})