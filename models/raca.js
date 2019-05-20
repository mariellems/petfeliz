const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  codigo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  especie: String
});

mongoose.model('racas', _model);
