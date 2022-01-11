import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config()



const app = express()
app.options('*', cors())
const port = process.env.PORT

app.use(cors())

//adding router
app.use('/', router)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})