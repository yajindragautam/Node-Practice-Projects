const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// Initilize app
const app = express();

// Parse JSON Data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Cookie Parser, Session and Flash
app.use(cookieParser("SecretStringForCookies"));
app.use(
  session({
    secret: "SecretStringForSession",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash);

// Set View Engine - EJS
app.set("view engine", "ejs");


// Get - Home Page
app.get("/", (req, res) => {
  try {
    res.render("pages/index");
    res.status(200).json({
        message:'Fetched Successfully..!'
    })
  } catch (error) {
    console.log(error);
  }
});

// PortNumber
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Litening to port ${port}`);
  console.log(`Click To Visit: http://127.0.0.1:${port}`);
});
