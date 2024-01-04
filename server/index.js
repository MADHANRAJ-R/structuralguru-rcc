const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { email, number, state } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "madhansr1509@gmail.com",
      pass: "fdqw lkfg bqiw hqnz",
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "krishnakeshavdas007@gmail.com",
    subject: "New visitor for RCC training website",
    html: `<p>You got a new visitor for RCC training website. <br />  <br /> Email: ${email}</p><p>WhatsApp Number: ${number}</p><p>State: ${state}</p>`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
