const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name:String,
    email:String,
    comments: String
}, {collection:'Data'})

module.exports = mongoose.model('Data', ContactSchema);
