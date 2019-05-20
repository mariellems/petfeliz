const mongoose = require("mongoose");
const racaModel = mongoose.model("racas");

module.exports = function(app) {
  app.get("/racas", function(req, resp) {
    racaModel.find().then(
      function(data) {
        resp.status(200).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.post("/racas", function(req, resp) {
    racaModel.create(req.body).then(
      function(data) {
        resp.status(201).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.get("/racas/:id", function(req, resp) {
    racaModel.findById(req.params.id).then(
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
  app.put("/racas/:id", function(req, resp) {
    racaModel.findOneAndUpdate({ _id: req.params.id }, req.body).then(
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
  app.delete("/racas/:id", function(req, resp) {
    racaModel.deleteOne({ _id: req.params.id }).then(
      function() {
        resp.status(204).send();
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
};
