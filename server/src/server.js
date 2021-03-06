'use strict';

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/routing.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(router);


app.listen(PORT, () => {
    console.log('Server is running on localhost:', PORT)
})
