const User = require('../models/User.js');
const passport = require('passport');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
