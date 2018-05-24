const mongoose = require('mongoose');

const schema = mongoose.Schema({
  username: {
    type: String, required: true, trim: true, lowercase: true, unique: true
  },
  updatedAt: { type: Date, default: Date.now }
});

schema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('User', schema);
