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
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  }
});

machineScheme.statics.list = function() {
  return this.find({});
};

module.exports = mongoose.model('Machine', machineScheme);