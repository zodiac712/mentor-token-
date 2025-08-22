const mongoose = require("mongoose");
const StartupSchema = new mongoose.Schema({
  startupName: String,
  email: { type: String, unique: true },
  password: String,
  representative: String,
  address: String,
  profileImg: String,
  invitedMentors: [
    {
      _id: String,
      name: String,
      email: String,
      img: String,
      skills: String,
      desc: String,
      rating: Number,
      stars: Number,
      trending: Boolean,
      removable: Boolean
    }
  ]
});

module.exports = mongoose.model("Startup", StartupSchema);