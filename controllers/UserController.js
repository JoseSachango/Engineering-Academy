const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUser: function(req, res) {

    //console.log("This is the paramsId for the axios get request: ",req.params.id)
    console.log("This is the req.query: ",req.query)
    console.log("This is the body of the request to the user endpoint: ",req.body)
    console.log("This is the req.params.id: ",req.params.id)

    db.User
      .findOne({
        user:{name:JSON.parse(req.params.id).name,userId:JSON.parse(req.params.id).userId}
      }, (err,results) =>{
        if(err){
          console.log("There was an error with the findOne method: ",err)
        }else {
          console.log("The getUser controller is working: ",results)
          return res.json(results)
        }
      })
      .populate("newProject")
      
      /*
      .then(dbUser => {
        console.log("The findOne method was succesful here is the data: ",dbUser)
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));*/
  },
  createUser: function(req, res) {

    console.log("This is the object that comes in with the body: ",req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
