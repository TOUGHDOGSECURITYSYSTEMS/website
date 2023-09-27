const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const passport = require('./passport-config');
const session = require('express-session');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '4Ng?f8@5^>d\J-If9', // Replace with your secret key
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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
