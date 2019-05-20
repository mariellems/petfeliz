const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  codigo: {
    type: String,
    required: true
  },
  descricao: String,
  raca: String,
  especie: String
});

mongoose.model("animais", _model);
