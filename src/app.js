const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // ✅ Parse JSON requests

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/ai", aiRoutes);

module.exports = app;
