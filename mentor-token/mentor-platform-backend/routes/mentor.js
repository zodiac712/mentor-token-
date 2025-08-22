const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");

router.post("/register", mentorController.register);
router.get("/:id", mentorController.getProfile);


module.exports = router;