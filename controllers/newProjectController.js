const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.NewProject
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getNewProject: function(req, res) {
    db.NewProject
      .findOne({
        newProjectName: req.params.id
      })
      .populate("units")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createNewProject: function(req, res) {

    console.log("This is the object that comes in with the body: ",req.body)
    db.NewProject
      .create({newProjectName:req.body.newProjectName,components:req.body.components})
      .then(({ _id }) => db.User.findOneAndUpdate({user:{name:req.body.name,userId:req.body.userId}}, { $push: { newProject: _id } }, { new: true }))
      .then(dbUser => {
        console.log("The update to the users collection was made successfully: ",dbUser)
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.NewProject
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.NewProject
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};