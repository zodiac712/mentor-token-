const Mentor = require("../models/mentor");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, surname, email, password, phone, address, profileImg } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const mentor = new Mentor({
      name,
      surname,
      email,
      password: hashedPassword,
      phone,
      address,
      profileImg
    });
    await mentor.save();
    res.status(201).json({ message: "Mentor registered", profileImg: mentor.profileImg });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProfile = async (req, res) => {
  const mentor = await Mentor.findById(req.params.id);
  if (!mentor) return res.status(404).json({ message: "Mentor not found" });
  res.json(mentor);
};

