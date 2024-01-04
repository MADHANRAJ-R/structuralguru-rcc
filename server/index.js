const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors(
  {
    origin: ["https://structuralguru-rcc-sample-client.vercel.app"],
    methods: ["POST","GET","PUT","DELETE"],
    credentials: true
  }
));
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, number, state } = req.body;

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
    html: `<p>You got a new visitor for RCC training website.</p><p>Name:${name} , Email: ${email} , WhatsApp Number: ${number} , State: ${state}</p>`,
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
