const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  codigo: {
    type: String,
    required: true
  },
  descricao: String,
  raca: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "racas"
  },
  especie: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "especies"
  }
});

mongoose.model("animais", _model);
