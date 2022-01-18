const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
require('./config/db');

// Initilize app
const app = express();

// Server Static Files
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('Hi Yajindra.! No one can stop you keep it up..!');
})

// Listening to Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App Runnning On Port ${port}`);
  console.log(`Click Here: http://127.0.0.1:${port}`);
});

