const express = require('express');
const router = express.Router();
 
// **** require User model in order to use it ****
const User = require('../models/User');

// GET route to display all the users
router.get('/user', (req, res) => {
  User.find()
    .then(UserFromDB => {
      console.log(UserFromDB);
      res.render('User-list', { User: UserFromDB });
    })
    .catch(err => console.log(`Error while getting the User from the DB: ${err}`));
});
 
// GET route to display the form to create a new User
router.get('/User/create', (req, res) => res.render('User-create'));
 
module.exports = router;