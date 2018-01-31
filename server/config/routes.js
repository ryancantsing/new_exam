var pets = require('../controllers/pets.js');
var path = require('path')
module.exports = function(app) {
    app.get('/show', (req, res) => {
        console.log("made it to routes SHOW")
        pets.show(req, res)
    })

    app.get('/view/:id', (req, res) => {
        console.log("checkpoint Routes VIEW")
        console.log(req.params.id)
        pets.view(req, res)
    })
    app.post('/create', (req, res)=> {
        console.log("made it to routes CREATE", req.body)
        pets.create(req, res)
    })
    app.patch('/likeAPet/:id', (req, res) => {
        console.log("made it to routes UPDATE 1")
        pets.likeAPet(req,res)
    })
    app.patch('/patch/:id', (req, res) => {
        console.log("checkpoint Routes UPDATE 2")
        console.log(req.params)
        pets.update(req, res)
    })
    app.delete('/delete/:id', (req, res) => {
        console.log("DELETE made it to routes")
        pets.delete(req, res)
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./examAngular2/dist/index.html"))
    })}