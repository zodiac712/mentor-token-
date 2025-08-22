const mongoose = require("mongoose");
const ApplicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Startup" },
  applicationType: { type: String, enum: ["mentorToCompany", "companyToMentor"] },
  status: { type: String, default: "pending" },
  acceptedStatus: { type: String, enum: ["done", "rejected", "in progress"], default: "in progress" }
});
module.exports = mongoose.model("Application", ApplicationSchema);