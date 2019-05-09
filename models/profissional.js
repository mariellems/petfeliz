const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  nome: {
    type: String,
    required: true
  },
  documento: {
    type: String,
    required: true
  },
  email: String,
  telefone: String
});

mongoose.model("profissionais", _model);
