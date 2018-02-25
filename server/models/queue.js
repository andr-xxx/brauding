const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueScheme = new Schema({
  task: {
    type: Schema.Types.ObjectId,
    ref: 'Task'
  },
  timeStart: {
    type: Date,
    required: true
  }
});

queueScheme.statics.getQueueListByMachine = function() {


  return this.find({});
};

module.exports = mongoose.model('Queue', queueScheme);