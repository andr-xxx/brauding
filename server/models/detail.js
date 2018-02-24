const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }
});

module.exports = mongoose.model('Detail', detailScheme);