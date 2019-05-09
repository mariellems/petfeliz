const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  emissao: {
    type: Date,
    default: Date.now
  },
  proprietario: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "proprietarios"
  },
  animal: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "animais"
  },
  itens: [
    {
      produto: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "produtos"
      },
      servico: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "servicos"
      },
      preco: Number,
      quantidade: Number
    }
  ]
});

_model.virtual("total").get(function() {
  return this.itens
    ? this.itens.reduce(
        (total, item) => total + item.preco * item.quantidade,
        0
      )
    : 0;
});

mongoose.model("pedidos", _model);
