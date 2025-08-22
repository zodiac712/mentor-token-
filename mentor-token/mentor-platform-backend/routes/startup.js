const express = require("express");
const router = express.Router();
const startupController = require("../controllers/startupcontroller");

router.post("/register", startupController.register);
router.get("/:id", startupController.getProfile);
router.post("/:id/mentors", startupController.addMentor);
router.get("/:id/mentors", startupController.getMentors);
router.delete("/:id/mentors/:mentorId", startupController.removeMentor);

module.exports = router;