const mongoose = require('mongoose');
const log = require('winston');

mongoose.connect(process.env.DB_URL)
  .then(
    () => {

      log.info('db run on port')
    },
    (err) => {
      console.log(err)
    }
  );

