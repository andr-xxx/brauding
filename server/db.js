const mongoose = require('mongoose');
const debug = require('debug')('db');

mongoose.connect(process.env.DB_URL)
  .then(
    () => {
      debug('All done')
    },
    (err) => {
      debug(err)
    }
  );

