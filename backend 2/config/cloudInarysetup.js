const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const multer = require('multer');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
console.log(process.env)
var storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'Project3', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
      console.log(file)
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});
const uploadCloud = multer({ storage: storage });
module.exports = uploadCloud;