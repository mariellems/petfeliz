const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  nome: {
    type: String,
    required: true
  },
  documento: String,
  email: String,
  telefone: String,
  animal: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "animais"
  }
});

mongoose.model("proprietarios", _model);
