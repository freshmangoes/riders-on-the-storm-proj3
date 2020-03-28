const db = require("../models");

module.exports = {
  findById: function (req, res) {
    db.Search
      .find({ userId: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: async (req, res) => {
    try {
      const search = await db.Search.findOne({ start: req.body.start, end: req.body.end })

      if (!search) {
        console.log('adding new search', req.body)
        db.Search.create(req.body)
          .then(dbModel => res.json({ message: 'New search added!' }))
          .catch(error => res.status(200).json({ message: error }));
      } else {
        res.status(200).json({ message: 'Search exists!' })
      }

    } catch (error) {
      console.log('err', error)
      res.status(500).json(error);
    }
  }
};
