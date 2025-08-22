const Mentor = require("../models/mentor");
const Startup = require("../models/startup");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let user = await Mentor.findOne({ email });
  let type = "mentor";
  if (!user) {
    user = await Startup.findOne({ email });
    type = "startup";
  }
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, type },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  res.json({
    token,
    type,
    name: type === "mentor" ? user.name : user.startupName,
    userId: user._id,
    profileImg: user.profileImg || "" 
  });
};