const mongoose = require("mongoose");

const cats = new mongoose.Schema({
  Name: { type: String, required: true },
  Breed: { type: String, required: true },
  Description: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model("Cats", cats);
