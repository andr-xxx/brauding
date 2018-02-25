const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskModel = require('./task');

const detailScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  }]
});

detailScheme.statics.getFullInformationById = async function (id) {
  try {
    const detail = await this.findById({'_id': id});
    const taskList = await TaskModel.find({'detail': detail.id});

    return {
      ...detail._doc,
      tasks: taskList
    }
  } catch (err) {
    return err
  }
};

module.exports = mongoose.model('Detail', detailScheme);