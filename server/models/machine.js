const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const machineScheme = new Schema({
  name: {
    type: String,
    required: true,
    unique : [true, 'this machine already registered']
  },
  additionalInformation: {
    type: String
  }
});

machineScheme.statics.list = function() {
  return this.find({});
};

module.exports = mongoose.model('Machine', machineScheme);