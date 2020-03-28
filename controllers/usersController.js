const db = require("../models");

module.exports = {

  create2: async (req, res) => {
    try {
      if (!req.body.username || !req.body.password) {
        res.status(200).json({ message: 'The username or password value is missing, please make sure to include both fields and try creating the account again.' })
      } else {
        const user = await db.User.findOne({ username: req.body.username })
        if (!user) {
          db.User.create(req.body)
            .then(dbModel => res.json({ message: 'New user has been registered!', id: dbModel._id }))
            .catch(error => res.status(200).json({ message: error }));
        } else {
          res.status(200).json({ message: 'User already exists, please register with a different username.' })
        }
      }


    } catch (error) {
      res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {

      const user = await db.User.findOne({ username: req.body.username })
      if (!user) {
        return res.status(200).json({ message: "The username does not exist. Please check your credentials or register as a new user." });
      }
      user.comparePassword(req.body.password, (error, match) => {
        if (!match) {
          return res.status(200).json({ message: "The password is invalid. Please check your credentials or register as a new user." });
        }
      });
      res.json({ message: "The username and password combination is correct!", id: user._id });
    } catch (error) {
      res.status(500).json(error);
    }
  }



};
