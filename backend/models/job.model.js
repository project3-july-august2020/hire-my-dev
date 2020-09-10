const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const jobSchema  = new Schema({
    id: { type : String , unique : true, required : true, dropDups: true },
    type: String,
    description: String,
    created_at: String,
    company: String,
    location: String,
    title: String,
    how_to_apply: String,
    company_logo:String,
    owner:String,
    });

    module.exports = model('Job', jobSchema);