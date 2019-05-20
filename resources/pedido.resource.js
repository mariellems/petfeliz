const mongoose = require("mongoose");
const pedidoModel = mongoose.model("pedidos");

module.exports = function(app) {
  app.get("/pedidos", function(req, resp) {
    pedidoModel.find().then(
      function(data) {
        resp.status(200).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.post("/pedidos", function(req, resp) {
    pedidoModel.create(req.body).then(
      function(data) {
        resp.status(201).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.get("/pedidos/:id", function(req, resp) {
    pedidoModel.findById(req.params.id).then(
      function(data) {
        if (!data) {
          resp.status(404).send();
        } else {
          resp.status(200).send(data);
        }
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.put("/pedidos/:id", function(req, resp) {
    pedidoModel.findOneAndUpdate({ _id: req.params.id }, req.body).then(
      function(data) {
        if (!data) {
          resp.status(404).send();
        } else {
          resp.status(200).send(data);
        }
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.delete("/pedidos/:id", function(req, resp) {
    pedidoModel.deleteOne({ _id: req.params.id }).then(
      function() {
        resp.status(204).send();
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
};
