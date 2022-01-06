const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// Init express App
const app = express();

// Port Number
const port = process.env.PORT || 5000;

// Parse JSON Data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Static Files
app.use(express.static("public"));

// Set Cookie Parser, Session & Flash
app.use(cookieParser("SecretStringForCookies"));
app.use(
  session({
    secret: "SecretStringForSession",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Flash Message Middleware
app.use((req, res, next) => {
  res.locals.notice = req.session.notice;
  delete req.session.notice;
  next();
});

// Set View Engine - EJS
app.set("view engine", "ejs");

// Get- Home Page
app.get("/", (req, res) => {
  try {
    res.render("pages/register");
  } catch (error) {
    console.log(error);
  }
});

// Post - Users
app.post("/", (req, res) => {
  try {
    if (
      req.body.name == "" ||
      req.body.email == "" ||
      req.body.password == "" ||
      req.body.conformPass == ""
    ) {
      req.session.notice = {
        type: "danger",
        intro: "Empty Fields..!",
        message: "Please Fill All Required Information",
      };
      res.redirect("/");
    }
    if (req.body.password != req.body.conformPass) {
      req.session.notice = {
        type: "danger",
        intro: "Miss matched Password",
        message: "Try Again..!",
      };
      res.redirect("/");
    }
    // User Login Success
    req.session.notice = {
      type: "success",
      intro: "Registered Successfully",
      message: "Plese Login",
    };
    res.redirect("/");
    console.log(req.body.name, req.body.email, req.body.password);
  } catch (error) {
    console.log(error);
  }
});

// Listening To Server
app.listen(port, () => {
  console.log(`Listening To Port ${port}`);
  console.log(`Click Here To Visit: http://127.0.0.1:${port}`);
});
