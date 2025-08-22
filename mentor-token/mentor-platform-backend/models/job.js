const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Startup", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillsRequired: [String],
  status: { type: String, default: "Open" },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentor" }]
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);