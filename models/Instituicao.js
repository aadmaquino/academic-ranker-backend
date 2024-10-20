var mongoose = require('mongoose');

var InstituicaoSchema = new mongoose.Schema({
  instituicao: { type: String },
  curso: { type: String },
  notageral: Number,
  notaporcurso: Number,
  media: Number,
});

module.exports = mongoose.model('Instituicao', InstituicaoSchema);