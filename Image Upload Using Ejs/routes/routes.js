const express = require("express");
const multer = require("multer");
const User = require("../models/User");
const router = express.Router();

// Image Upload
let storage = multer.diskStorage({
  destination: function (req, fole, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + this.file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single('image')

// @ des POST /


// @ des GET /
router.get("/", (req, res) => {
  res.render("homePage", { title: "Home Page" });
});

// @ des GET / add
router.get("/add", (req, res) => {
  res.render("addUsers", { title: "Add Users" });
});

//! Exporting Routers
module.exports = router;
