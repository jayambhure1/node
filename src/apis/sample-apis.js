const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const router = express.Router();

// GET request handler
router.get("/apis/sample/get-requests", (req, res) => {
  res.status(200).json({ status: "success", timestamp: new Date() });
});

// POST request handler
router.post("/apis/sample/post-requests", (req, res) => {
  const requestData = req.body;

  if (!requestData || Object.keys(requestData).length === 0) {
    return res
      .status(400)
      .json({ status: "error", message: "Request body is required" });
  }

  res
    .status(200)
    .json({ status: "success", data: requestData, timestamp: new Date() });
});

// file upload handler
const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

router.post("/apis/sample/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ status: "error", message: "No file uploaded" });
  }

  res
    .status(200)
    .json({
      status: "success",
      filename: req.file.originalname,
      path: req.file.path,
    });
});

module.exports = router;
