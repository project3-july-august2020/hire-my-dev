const router = require('express').Router();
const fileuploader = require('../config/cloudinary-setup')
const user = require('../models/user')
const project = require('../models/project.model')
const job = require('../models/job.model')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/fileupload', fileuploader.single('upload'),(req, res, next) => {
  console.log(req.file)
  res.status(200).json({ msg: 'Working' });
});


router.post('/userdata', (req, res) => {
  console.log('called');
  user.create(req.body)
    .then(res.json('user data is added'))
    .catch(error => console.log('An error happened while trying to post user data to database', error));
});

router.post('/favorite_job', (req, res) => {
  console.log('called');
  //will also need to add _id to userdata favorite_jobs string
  job.create(req.body)
    .then(res.json('user data is added'))
    .catch(error => console.log('An error happened while trying to post user data to database', error));
});

router.get('deleteproject/:id', (req, res) => {
  console.log('called');
  //will also need to add _id to userdata favorite_jobs string
  project.findByIdAndDelete(req.params.id)
    .then(res.json('project deleted'))
    .catch(error => console.log('An error happened while trying to delete project', error));
});


module.exports = router;

