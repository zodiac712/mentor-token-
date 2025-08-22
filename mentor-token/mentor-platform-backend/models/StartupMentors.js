const mongoose = require("mongoose");
const StartupMentorSchema = new mongoose.Schema({
  startupId: { type: mongoose.Schema.Types.ObjectId, ref: "Startup" },
  name: String,
  email: String,
  img: String,
  skills: String,
  desc: String,
  rating: Number,
  stars: Number,
  trending: Boolean,
  removable: Boolean
});
module.exports = mongoose.model("StartupMentor", StartupMentorSchema);