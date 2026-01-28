import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const {
    name,
    email,
    mobile,
    interest,
    budget,
    currency,
    description,
  } = req.body;

  try {
    // ✉️ EMAIL SETUP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Interest:</b> ${interest}</p>
        <p><b>Budget:</b> ${currency} ${budget}</p>
        <p><b>Description:</b> ${description}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
