var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    department : {type: String},
    medicament : {type: String},
    stock : {type: Number}
});

module.exports = mongoose.model('stock',stockSchema)
