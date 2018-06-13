var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    // title is required for the article
    title: {
      type: String,
      required: true
    },
    // article link
    link: {
      type: String,
      required: true
    },

    // article summary
    summary: {
      type: String,
      required: true
    },

    //image link
    image: {
      type: String,
      required: true
    },
    // note: the object that stores the note id
    note: {
      type: Schema.Types.ObjectId,
      ref: "note"
    }
  });
  
  //model for the schema
  var article = mongoose.model("article", articleSchema);
  
  // Export article model
  module.exports = article;
  

