const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(morgan("dev"));
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  if (!req.file) {
    return res.json({ error: "No file upload" });
  }

  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App is running on port " + port);
});
