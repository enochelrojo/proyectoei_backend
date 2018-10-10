var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CursoSchema = new Schema({
    nombre: String
});

module.exports = mongoose.model('Curso', CursoSchema);
