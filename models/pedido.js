const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _model = new Schema({
  emissao: {
    type: Date,
    default: Date.now
  },
  proprietario: String,
  animal: String,
  itens: [
    {
      produto: String,
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
