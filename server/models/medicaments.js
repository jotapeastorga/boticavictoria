var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicamentsSchema = new Schema({
});

module.exports = mongoose.model('medicaments',medicamentsSchema);