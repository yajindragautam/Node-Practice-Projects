const express = require("express");
const User = require("../modules/User");
const UserValidator = require("../validators/userValidator");
const router = express.Router();

// @desc Get Home Page View
router.route("/").get((req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.log(error);
  }
});

// @desc Get Home Register View
router
  .route("/register")
  .get((req, res) => {
    try {
      res.render("register");
    } catch (error) {
      console.log(error);
      res.render("404");
    }
  })
  .post( UserValidator,async (req, res) => {
    try {
      const user = await User.create(req.body);
      req.flash("alert",{
        type: 'success',
        message: 'User Registered Successfully',
      })
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.render("404");
    }
  });

//! Exporting Routes
module.exports = router;
