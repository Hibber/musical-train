const express = require("express");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (_req, res) => {
  res.send("musical-train is running");
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

server.on("error", (err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});
