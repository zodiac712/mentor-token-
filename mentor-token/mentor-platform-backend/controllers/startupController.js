const Startup = require("../models/startup");
const StartupMentor = require("../models/StartupMentors");
const bcrypt = require("bcryptjs");


exports.register = async (req, res) => {
  try {
    const { startupName, email, password, representative, address, invitedMentors, profileImg } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const startup = new Startup({
      startupName,
      email,
      password: hashedPassword,
      representative,
      address,
      invitedMentors,
      profileImg
    });
    await startup.save();
    res.status(201).json({ message: "Startup registered", _id: startup._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getProfile = async (req, res) => {
  const startup = await Startup.findById(req.params.id);
  if (!startup) return res.status(404).json({ message: "Startup not found" });
  res.json(startup);
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const startup = await Startup.findOne({ email });
    if (!startup) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, startup.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      type: "startup",
      name: startup.startupName,
      userId: startup._id
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addMentor = async (req, res) => {
  const { id } = req.params;
  const { name, email, img, skills, desc, rating, stars, trending, removable } = req.body;
  try {
    const mentor = new StartupMentor({
      startupId: id,
      name,
      email,
      img,
      skills,
      desc,
      rating,
      stars,
      trending,
      removable
    });
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getMentors = async (req, res) => {
  const { id } = req.params;
  const mentors = await StartupMentor.find({ startupId: id });
  res.json(mentors);
};


exports.removeMentor = async (req, res) => {
  const { mentorId } = req.params;
  await StartupMentor.findByIdAndDelete(mentorId);
  res.json({ message: "Mentor removed" });
};