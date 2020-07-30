const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Job = new Schema({
    type: String,
    url: String,
    createdat: String,
    company: String,
    company_url: String,
    location: String,
    title: String,
    how_to_apply: String,
    company_logo:String,
    Owner: {
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    });

    module.exports = model('Job', Schema);