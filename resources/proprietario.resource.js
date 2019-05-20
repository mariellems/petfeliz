const mongoose = require("mongoose");
const proprietarioModel = mongoose.model("proprietarios");

module.exports = function(app) {
  app.get("/proprietarios", function(req, resp) {
    proprietarioModel.find().then(
      function(data) {
        resp.status(200).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.post("/proprietarios", function(req, resp) {
    proprietarioModel.create(req.body).then(
      function(data) {
        resp.status(201).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.get("/proprietarios/:id", function(req, resp) {
    proprietarioModel.findById(req.params.id).then(
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
  app.put("/proprietarios/:id", function(req, resp) {
    proprietarioModel.findOneAndUpdate({ _id: req.params.id }, req.body).then(
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
  app.delete("/proprietarios/:id", function(req, resp) {
    proprietarioModel.deleteOne({ _id: req.params.id }).then(
      function() {
        resp.status(204).send();
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
};
