var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    torre : {type: String},
    numero :{type: Number}
});

module.exports = mongoose.model('departments',departmentSchema);