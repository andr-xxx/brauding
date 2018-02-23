const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectScheme = new Schema({
  name: {
    type: String,
    required: true,
    unique : [true, 'project with this name already register']
  },
  details: [{
    detail: {
      type: Schema.Types.ObjectId,
      ref: 'Detail'
    }
  }]
});

projectScheme.statics.list = function() {
  return this.find({});
};

module.exports = mongoose.model('Project', projectScheme);