const mongoose = require("mongoose");
const especieModel = mongoose.model("especies");

module.exports = function(app) {
  app.get("/especies", function(req, resp) {
    especieModel.find().then(
      function(data) {
        resp.status(200).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.post("/especies", function(req, resp) {
    especieModel.create(req.body).then(
      function(data) {
        resp.status(201).send(data);
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
  app.get("/especies/:id", function(req, resp) {
    especieModel.findById(req.params.id).then(
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
  app.put("/especies/:id", function(req, resp) {
    especieModel.findOneAndUpdate({ _id: req.params.id }, req.body).then(
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
  app.delete("/especies/:id", function(req, resp) {
    especieModel.deleteOne({ _id: req.params.id }).then(
      function() {
        resp.status(204).send();
      },
      function(err) {
        resp.status(500).send(err);
      }
    );
  });
};
