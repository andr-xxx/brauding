const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: null
  },
  order: {
    type: Number,
    required: true
  },
  detail: {
    type: Schema.Types.ObjectId,
    ref: 'Detail'
  },
  machine: {
    type: Schema.Types.ObjectId,
    ref: 'Machine',
    required: true
  },
  duration: {
    type: Number,
    default: null
  }
});

module.exports = mongoose.model('Task', taskScheme);