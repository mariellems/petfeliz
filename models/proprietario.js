const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  nome: {
    type: String,
    required: true
  },
  documento: String,
  telefone: String,
  animal: String
});

mongoose.model("proprietarios", _model);
