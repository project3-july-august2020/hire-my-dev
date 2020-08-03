const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projectSchema = new Schema({
    picture: String,
    title: String,
    technologies_used: String,
    description: String,
    githubrepourl: String,
    sitelink: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    });

    module.exports = model('Project', projectSchema );