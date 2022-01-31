const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require('connect-flash');
const dotenv = require("dotenv").config();
require("./config/db");

// Initilize app
const app = express();

// Server Static Files
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");

//Connect Flash
app.use(flash());

// Express Session
app.use(
  session({
    secret: "ExpressSecretForLoginRegister",
    resave: true,
    name: "session",
    saveUninitialized: true,
  })
);

//Middlewres For Alerts
app.use((req, res, next)=>{
  res.locals.alert = req.session.alert;
  delete req.session.alert;
  next();
})

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Routers
app.use("/", require("./routes/web"));

// Listening to Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App Runnning On Port ${port}`);
  console.log(`Click Here: http://127.0.0.1:${port}`);
});
