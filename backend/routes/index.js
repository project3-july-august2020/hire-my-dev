const router = require('express').Router();
const fileuploader = require('../config/cloudinary-setup')
const User = require('../models/User')
const Project = require('../models/project.model')
const Job = require('../models/job.model')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/fileupload', fileuploader.single('upload'), isAuth, (req, res, next) => {
  console.log(req.file)
  res.status(200).json({ msg: 'Working' });
});


router.post('/userdata', (req, res) => {
  console.log('called');
  let userdata = req.body
  userdata._id = req.user._id
  userdata.email = req.user.email
  User.create(userdata)
    .then(result => {res.json(`User data is added to database ${result}`)})
    .catch(error => console.log('An error happened while trying to post User data to database', error));
});

router.post('/favorite_job', isAuth, (req, res) => {
  console.log('called');
  //will also need to add _id to userdata favorite_jobs string
  Job.create(req.body)
    .then(res.json('User data is added'))
    .catch(error => console.log('An error happened while trying to post user data to database', error));
});

router.get('deleteproject/:id', isAuth, (req, res) => {
  console.log('called');
  //will also need to add _id to userdata favorite_jobs string
  Project.findByIdAndDelete(req.params.id)
    .then(res.json('project deleted'))
    .catch(error => console.log('An error happened while trying to delete project', error));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;

