var mongoose = require ('mongoose');
var validate = require('mongoose-validator');
var uniqueValidator = require('mongoose-unique-validator')
var PetSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "The pet requires a name"], 
        unique: [true, "Your pet needs a unique name"],
        minlength: [3, "Your Pet's name needs more than 3 character!"]
    }, 
    type: {type: String, 
           required: [true, "we need to know what kind of animal it is"]},
    description: {type: String, 
                  required: [true, "please describe your pet"],
                  minlength: [3, "description must be more than 3 characters!"]},
    likes: {type: Number},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    })

PetSchema.plugin(uniqueValidator);
mongoose.model ('Pet', PetSchema);
var Pet = mongoose.model('Pet');