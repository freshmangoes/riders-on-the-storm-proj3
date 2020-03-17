var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var SearchSchema = new Schema({
  start: String,
  end: String
});


var Search = mongoose.model("Search", SearchSchema);

module.exports = Search;
