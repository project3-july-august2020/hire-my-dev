const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const PLM = require("passport-local-mongoose");

const userSchema = new Schema({
  userId: {
    type:String,
    required:true
  },
  username: String,
  skills: [String],
  linkedinurl: String,
  email: String,
  githublink: String,
  about: String,
  projects: {
    type: Schema.Types.ObjectId,
    ref:"Project"
  },
  favorite_jobs: [String],
  });

  userSchema.plugin(PLM, { usernameField: "username" });
    module.exports = model('user', userSchema);
