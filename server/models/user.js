const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShcema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: [6, 'password so short']
  },
  role: {
    type: String,
    required: true,
    default: 'master'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

userShcema.statics.findByName = function(details, cb) {
  this.findOne({ userName: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('User', userShcema);