const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");


router.post("/", jobController.create);
router.get("/", jobController.getAll);
router.get("/:id", jobController.getOne);
router.put("/:id", jobController.update);
router.delete("/:id", jobController.delete);

module.exports = router;