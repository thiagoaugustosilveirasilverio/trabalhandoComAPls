const { application } = require('express')
const express = require('express')

const app = express()

app.listen('3000')

/*
//app.route('/').get( (req,res) => res.send("hello"))
app.route('/sobre').get( (req,res) => res.send("hello sobre"))


app.route('/').post( (req,res) => console.log(req.body) )
*/
/*
//middleware
app.use(express.json())

app.route('/').post( (req,res) => res.send(req.body))
*/
/*PUT
app.use(express.json())

let author = " Thiago"

app.route('/').get ( (req,res) => res.send(author))

app.route('/').put( (req,res) => {
    author = req.body.author
    res.send(author)
})
*/
//Delete


app.route('/:identificador').delete( (req,res) => {
    
    res.send(req.params.identificador)
})
