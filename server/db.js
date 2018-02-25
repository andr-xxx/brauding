const mongoose = require('mongoose');
const debug = require('debug')('db');

module.exports.connect = () => {
  if (process.env.ENV === 'development') {
    mongoose.set('debug', true);
  }
  mongoose.connect(process.env.DB_URL)
    .then(
      () => {
        console.log('All done')
      },
      (err) => {
        console.log(err)
      }
    );
};
