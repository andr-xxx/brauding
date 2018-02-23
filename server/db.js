const mongoose = require('mongoose');
const debug = require('debug')('db');

mongoose.connect(process.env.DB_URL)
  .then(
    () => {
      console.log('All done')
    },
    (err) => {
      console.log(err)
    }
  );

