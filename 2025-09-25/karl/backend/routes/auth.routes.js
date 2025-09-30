const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const SECRET = "supersecretkey";

// Dummy user for demo
const USER = { username: "admin", password: "admin123", role: "admin" };

// POST /auth/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    // Do not include password in JWT
    const token = jwt.sign({ username: USER.username, role: USER.role }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

// GET /auth/ping
router.get("/ping", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "No token provided" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ ok: true, user: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;
