const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name:String,
    filename:String
}, {collection:'imgData'})

const Image = mongoose.model('imgData', imageSchema);

module.exports = Image
