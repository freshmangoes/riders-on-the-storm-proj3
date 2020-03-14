var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var SearchSchema = new Schema({
  start: String,
  end: String
});

// This creates our model from the above schema, using mongoose's model method
var Search = mongoose.model("Search", SearchSchema);

// Export the Note model
module.exports = Search;
