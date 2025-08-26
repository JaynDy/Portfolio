import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const MESSAGES_FILE = "messages.json";

function loadMessages() {
  if (fs.existsSync(MESSAGES_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf-8"));
    } catch {
      return [];
    }
  }
  return [];
}
const messages = loadMessages();

function saveMessages(messages) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.json({ success: false, error: "All fields are required" });
  }

  if (messages.some((msg) => msg.email === email)) {
    return res.json({
      success: false,
      error: "You have already sent a message",
    });
  }

  try {
    messages.push({ name, email, message, date: new Date() });
    saveMessages(messages);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: "Failed to send message via EmailJS" });
  }
});

app.post("/validate-message", (req, res) => {
  const { email } = req.body;

  if (messages.some((msg) => msg.email === email)) {
    return res.json({ valid: false, error: "You have already sent a message" });
  }

  res.json({ valid: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));
