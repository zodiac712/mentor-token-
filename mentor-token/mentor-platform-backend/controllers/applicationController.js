const Application = require("../models/application");

exports.create = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const applications = await Application.find();
  res.json(applications);
};

exports.getOne = async (req, res) => {
  const application = await Application.findById(req.params.id);
  if (!application) return res.status(404).json({ message: "Application not found" });
  res.json(application);
};

exports.update = async (req, res) => {
  const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!application) return res.status(404).json({ message: "Application not found" });
  res.json(application);
};

exports.delete = async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ message: "Application deleted" });
};