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
  findById: function (req, res) {
    db.Search
      .find({ userId: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: (req, res) => {
  //   // console.log(req.body);
  //   db.User
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(00).json(err));
  // },
  search: async (req, res) => {
    try {
      // console.log(req.body, 'search body')
      const search = await db.Search.findOne({ start: req.body.start })

      if (!search) {
        // console.log('adding', req.body)
        db.Search.create(req.body)
          .then(dbModel => res.json({ message: 'New search added!' }))
          .catch(error => res.status(200).json({ message: error }));
      } else {
        // console.log('Invalid', req.body)
        res.status(200).json({ message: 'Invalid' })
      }

    } catch (error) {
      console.log('err', error)
      res.status(500).json(error);
    }
  },



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
