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

// Set View Engine - EJS
app.set("view engine", "ejs");

// Get- Home Page
app.get("/", (req, res) => {
    const userName = req.flash('user');
  res.render("pages/index",{userName});
});

// Post - Home page
app.post('/',(req, res)=>{
    req.flash('user', req.body.userName)
    res.redirect('/');
})

// Listening To Server
app.listen(port,()=>{
    console.log(`Listening To Port ${port}`);
    console.log(`Click Here To Visit: http://127.0.0.1:${port}`);
})
