const express = require('express')


const app = express()

app.listen('3000')

//middleware
app.use(express.json())

let author = "Thiago"

app.route('/').get( (req, res) => res.send(author))

app.route('/').put( (req,res) => {
    author = req.body.author
    res.send(author)
})
