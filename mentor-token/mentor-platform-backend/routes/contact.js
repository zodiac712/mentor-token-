const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { fullName, email, message } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "stefansmokovski75@gmail.com", 
      pass: "vngr aula gtlk rfow"
    }
  });

  const mailOptions = {
  from: "Mentor Token Contact Form <stefansmokovski75@gmail.com>", 
  to: "stefansmokovski75@gmail.com",
  replyTo: email, 
  subject: `Contact Form Message from ${fullName} (${email})`,
  text: message
};

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;