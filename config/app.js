const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const passport = require('./passport-config');
const session = require('express-session');
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET, // Replace with your secret key
  resave: false,
  saveUninitialized: true
}));

//Routes setup
app.use('/', routes);

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

//turning on and running server
const PORT = process.env.PORT || 5000;
const IP_ADDRESS = '192.168.1.106'
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on http://${IP_ADDRESS}:${PORT}`);
});
