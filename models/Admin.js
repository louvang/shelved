const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  username: String,
  password: String,
  dateCreated: Date,
  dateLastActive: Date,
});

module.exports = mongoose.model('Admin', adminSchema);
