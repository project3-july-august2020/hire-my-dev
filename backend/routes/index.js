const router = require('express').Router();
const fileuploader = require('../config/cloudinary-setup')
const User = require('../models/User')
const Project = require('../models/project.model')
const Job = require('../models/job.model')



router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/fileupload', [fileuploader.single('imageUrl'), isAuth], (req, res, next) => {
  console.log(req.file, ' orange')
  res.status(200).json(req.file);
});


router.post('/userdata', isAuth,(req, res) => {
  let body = req.body
  // body.imageUrl= req.file.path
  console.log('called');
  // delete body._id
  // delete body.username
  console.log(body,'coconut');
  User.findByIdAndUpdate(req.user._id, body,{ new : true })
    .then(result => {res.json(result)})
    .catch(error => console.log('An error happened while trying to post User data to database', error));
    // Project.cre()
});

// router.post('/favoritejob', isAuth, (req, res) => {
//   console.log('called');
//   Project.create({...req.body, owner: req.user._id})
//   .then(result => {
//     console.log(result, "stuff");
//     User.findByIdAndUpdate(req.user._id,{$push: {projects: result._id}},{ new : true })
//     .then(user => {res.json({user})})
//     .catch(error => console.log('An error happened while trying to post User data to database', error));
//     // result.json()
//   })
//       .catch(error => console.log('An error happened while trying to post User data to database', error));
      
// });

router.get('/getuserdata', isAuth, (req, res) => {
  console.log('called');
  User.findById(req.user._id)
  .then(user => res.json({user}))
  .catch(error => res.json({error}));
});

router.post('/favorite_job', isAuth, (req, res) => {
  console.log('called');
  //will also need to add _id to userdata favorite_jobs string
  Job.create({...req.body, owner: req.user._id})
    .then(result => {res.json(result)})
    .catch(error => console.log('An error happened while trying to post user data to database', error));
});

router.get('/getfavoritejobs', isAuth, (req, res) => {
  console.log('called');
  Job.find({owner : req.user._id})
  .then(result => {res.json(result)})
  .catch(error => res.json({error}));
});

router.get('/deletejob/:id', isAuth, (req, res) => {
  console.log('called');
  //will also need to add _id to userdata favorite_jobs string
  Job.findByIdAndDelete(req.params.id)
    .then(res.json('favorite job deleted'))
    .catch(error => console.log('An error happened while trying to delete project', error));
});

// router.get('/deletejob/:id', isAuth, (req, res) => {
//   console.log('called');
//   //will also need to add _id to userdata favorite_jobs string
//   Project.findByIdAndDelete(req.params.id)
//     .then(res.json('project deleted'))
//     .catch(error => console.log('An error happened while trying to delete project', error));
// });

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;

// picture: String,
//     title: String,
//     technologies_used: String,
//     description: String,
//     githubrepourl: String,
//     sitelink: String,