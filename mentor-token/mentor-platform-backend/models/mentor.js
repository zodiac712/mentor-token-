const mongoose = require("mongoose");
const MentorSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  skills: [String],
  profileImg: String,
  desc: String,
  acceptedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }]
});
module.exports = mongoose.model("Mentor", MentorSchema);