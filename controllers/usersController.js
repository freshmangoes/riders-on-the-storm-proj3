const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: (req, res) => {
    // console.log(req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: async (req, res) => {
    try {
      // console.log(req.body.username, req.body.password)

      const user = await db.User.findOne({ username: req.body.username })
      if (!user) {
        return res.status(400).json({ message: "The username does not exist" });
      }
      user.comparePassword(req.body.password, (error, match) => {
        if (!match) {
          return res.status(400).json({ message: "The password is invalid" });
        }
      });
      res.json({ message: "The username and password combination is correct!" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
