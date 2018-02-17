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
    type: number,
    required: true
  },
  detail: {
    type: Schema.Types.ObjectId,
    ref: 'Detail'
  }
});

module.exports = mongoose.model('Task', taskScheme);