const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Streams
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getStreamsByUnit: function(req, res) {
    db.Streams
      .findOne({
          unitName: req.params.id
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Streams
      .create({unitName:req.body.unitName,streamSource:req.body.streamSource,streamTarget:req.body.streamTarget,rows:req.body.rows})
      .then(({_id})=> {db.unitTable.findOneAndUpdate({},{$push:{streams:_id}},{new:true})})
      .then(dbUnit => res.json(dbUnit))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Streams
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Streams
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
