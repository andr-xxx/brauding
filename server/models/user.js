const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShcema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique : [true, 'User with this user name already exist']
  },
  password: {
    type: String,
    required: true,
    min: [6, 'password so short']
  },
  role: {
    type: String,
    required: true
  },
  department: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

userShcema.statics.findByName = function(details, cb) {
  this.findOne({ userName: new RegExp(name, 'i') }, cb);
};

userShcema.statics.getAll = function() {
  return this.find({});
};

userShcema.statics.remove = function(id) {
  return this.findById(id).remove();
};

module.exports = mongoose.model('User', userShcema);