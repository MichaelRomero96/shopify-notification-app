const express = require('express')

const router = express.Router()

router.get('/validateUser', (req, res) => {
    console.log(process.env.ADMIN_API_KEY)
    res.send(process.env.ADMIN_API_KEY)
})

module.exports = router