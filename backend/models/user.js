const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const PLM = require("passport-local-mongoose");

console.log("IN USERS")
const userSchema = new Schema({
  username: String,
  skills: [String],
  linkedinurl: String,
  email: String,
  githublink: String,
  about: String,
  projects: [{
    type: Schema.Types.ObjectId,
    ref:"Project"
  }],
  favorite_jobs: [String],
  googleId: String,
  imageUrl: String,
  });

  userSchema.plugin(PLM, { usernameField: "email" });
      
  
module.exports = model('User', userSchema);

