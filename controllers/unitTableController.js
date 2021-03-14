const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.unitTable
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUnit: function(req, res) {
    db.unitTable
      .findOne({
        unitName: req.params.id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUnit: function(req, res) {

    console.log("This is the object that comes in with the body: ",req.body)
    db.unitTable
      .create(req.body)
      .then(({_id})=> {db.NewProject.findOneAndUpdate({},{$push:{units:_id}},{new:true})})
      .then(dbNewProject => res.json(dbNewProject))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.unitTable
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.unitTable
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
