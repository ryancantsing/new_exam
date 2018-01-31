var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
//link your database down here!
mongoose.connect('mongodb://localhost/exam2');

var models_path = path.join(__dirname, './../models');


fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});