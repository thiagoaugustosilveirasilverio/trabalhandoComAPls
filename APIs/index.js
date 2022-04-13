const { application } = require('express')
const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get( (req,res) => res.send("hello") )