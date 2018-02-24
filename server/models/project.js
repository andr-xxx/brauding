const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectScheme = new Schema({
  name: {
    type: String,
    required: true,
    unique : [true, 'project with this name already register']
  },
  description: {
    type: String
  }
});

projectScheme.statics.list = function() {
  return this.find({});
};

module.exports = mongoose.model('Project', projectScheme);