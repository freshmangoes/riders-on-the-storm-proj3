const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users and Search collections

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ridersonthestormapp"
);



db.User
  .remove({});
