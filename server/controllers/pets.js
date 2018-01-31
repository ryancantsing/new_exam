var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    show: function(req, res){
        Pet.find({}).sort('type').exec((err, pet) => {
            console.log("checkpoint SHOW controllers", pet)
            if (err){
                res.json({ message: "Oh geez something's up", err})
            } else {
                res.json({ message: "Got 'em", pet })
            }
        })
    },
    view: function(req, res){
        console.log("checkpoint VIEW controllers")
        console.log(req.params.id)
        var pet = Pet.findById({_id : req.params.id}, (err, pet) => {
            console.log(Pet)
            if (err){
                res.json({ message: "Error finding Pet", err })
            } else {
                res.json({ message: "There's the Pet!", pet})
            }
        })
    },
    create: function(req, res){
        console.log("checkpoint CREATE controllers")
        console.log(req.body.name)
        var pet = new Pet({name: req.body.name, 
                           type: req.body.type, 
                           description: req.body.description, 
                           likes: 0,
                           skill1: req.body.skill1,
                           skill2: req.body.skill2,
                           skill3: req.body.skill3
                         })//request parameters
        pet.save((err, Pet) =>{
            if(err){
                res.json({message: "Something went wrong, bud", err })
            } else {
            res.json({message: "Successfully Added!", pet })
            }
        })
    },
    update: function(req, res){
        var opts = { runValidators : true}
        console.log("checkpoint UPDATE controllers")
        console.log(req.params)
        var pet = Pet.findById({_id : req.params.id})
            pet.update({
                name: req.body.name, 
                type: req.body.type, 
                description: req.body.description,
                skill1: req.body.skill1, 
                skill2: req.body.skill2, 
                skill3: req.body.skill3
                }, opts, 
                (err, pet) => {
                if (err){
                    res.json({message: "Something went wrong, bud", err })
                }else {
                    res.json({ message: "Successfully Updated", pet})
                }
            }) 
        },
        likeAPet: function(req, res){
            var pet = Pet.findById({_id: req.params.id})
            pet.update({likes: req.body.likes}, (err, pet) => {
            if (err){
                res.json({message: "Error writing review", err: err})
            }else {
                res.json({message: "Review Added!", pet})
                }
            })
        
        }, 
    delete: function(req, res){
        console.log("controllers checkpoint DELETE")
        console.log(req.params.id)
        var pet = Pet.findById({_id : req.params.id}, (err) => {
            pet.remove( (err) => {
            if (err){
                res.json({message: "Something went wrong, bud", err })
            } else{
                res.json({ message: "successfully apopted!"})
        }
    })
})
}
}