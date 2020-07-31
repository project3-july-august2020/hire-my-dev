const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const jobSchema  = new Schema({
    id: String,
    type: String,
    url: String,
    createdate: String,
    company: String,
    company_url: String,
    location: String,
    title: String,
    how_to_apply: String,
    company_logo:String,
    });

    module.exports = model('job', jobSchema);