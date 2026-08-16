import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { transporter, contactMailOptions } from "./mailer.js";
import { validateContactPayload } from "./validate.js";

dotenv.config();

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "20kb" }));

const allowedOrigins = (process.env.ALLOWED_ORIGIN || "https://vaptlab.com")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST"],
  }),
);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.post("/contact", contactLimiter, async (req, res) => {
  const validationError = validateContactPayload(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    await transporter.sendMail(contactMailOptions(req.body));
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`contact-api listening on port ${PORT}`);
});
