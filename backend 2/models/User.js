const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const PLM = require("passport-local-mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  skills: [String],
  about: String,
  projects: {
    type: Schema.Types.ObjectId,
    ref:"Project"
  },
  favorite_jobs: {
    type: Schema.Types.ObjectId,
    ref:"Jobs"
  },
  });

  userSchema.plugin(PLM, { usernameField: "username" });
    module.exports = model('User', userSchema);
