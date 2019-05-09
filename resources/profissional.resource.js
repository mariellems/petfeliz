const mongoose = require("mongoose");
const profissionalModel = mongoose.model("profissionais");

module.exports = function(app) {
  app.get("/profissionais", function(req, resp) {
    profissionalModel.find().then(
      function(data) {
        resp.status(200).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.post("/profissionais", function(req, resp) {
    profissionalModel.create(req.body).then(
      function(data) {
        resp.status(201).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.get("/profissionais/:id", function(req, resp) {
    profissionalModel.findById(req.params.id).then(
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
  app.put("/profissionais/:id", function(req, resp) {
    profissionalModel.findOneAndUpdate({ _id: req.params.id }, req.body).then(
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
  app.delete("/profissionais/:id", function(req, resp) {
    profissionalModel.deleteOne({ _id: req.params.id }).then(
      function() {
        resp.status(204).send();
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
};
