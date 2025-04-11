const express = require("expres");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotnev");
const { text } = require("express");

dotenv.congfig

const app = express();
app.use(cors());
app.use(express.json)


//nodemailer transporter
const transporter = nodemailer.createTransport({
    service:"gmail" 
    auth:{
        user: process.env.info@inboundholdingssea.com
        pass: process.env.EMAIL_PASS
    }

})

//endpoint for quote submission
app.post("send-quote", async (req, res) => {
    const {name, email, message} = req.body;

    //confrim input
    if(!name || !email || !message){
        return res.status(400).json({error:"all fields are required"});
    }

 
    
// Email options
const mailOptions = {
    from: `"${name}" <${email}>`, // Sender name and email
    to: "info@inboundholdings.co.ke", // Your company email
    subject: "New Quote Request",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h3>New Quote Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Quote request sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send quote request" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});