const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Project = new Schema({
    picture: String,
    title: String,
    description: String,
    githublink: String,
    sitelink: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    });

    module.exports = model('Project', Schema);