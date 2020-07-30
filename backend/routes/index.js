const router = require('express').Router();
const fileuploader = require('../config/cloudinary-setup')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/fileupload', fileuploader.single('upload'),(req, res, next) => {
  console.log(req.file)
  res.status(200).json({ msg: 'Working' });
});

module.exports = router;

