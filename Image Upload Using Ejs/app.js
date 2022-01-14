const express = require("express");
const session = require("express-session");
const ejs = require("ejs");
const dotenv = require("dotenv").config();

// Initilize Express App
const app = express();

// Set Up Session
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "ImageUploadAppSessionSecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Set Up Template Engine
app.set("view engine", "ejs");

// Allow Serve Static File
app.use(express.static("public"));

// Boby Parse
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  Routers
app.use("/", require("./routes/routes"));

// Listening To Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Click Here Visit: http://127.0.0.1:${port}`);
});
