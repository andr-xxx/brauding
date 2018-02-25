const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectScheme = new Schema({
  name: {
    type: String,
    required: true,
    unique: [true, 'project with this name already register']
  },
  description: {
    type: String
  },
  timeStart: {
    type: Date,
    default: new Date()
  },
  details: [{
    type: Schema.Types.ObjectId,
    ref: 'Detail'
  }]
});

projectScheme.statics.futureList = function () {
  return this.find({
    "timeStart": {
      "$gte": new Date()
    }
  });
};

projectScheme.statics.getFullList = function () {
  return this.find();
};

projectScheme.statics.getFullInformationById = function (id) {
  return this.findById(id).populate({path: 'details', populate: {path: 'tasks', populate: {path: 'machine'}}});
};

module.exports = mongoose.model('Project', projectScheme);