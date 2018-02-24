const express = require('express');
const https = require('https');
const router = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const debug = require('debug')('server');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

class Server {
  constructor(port) {
    this.port = port;
  }

  runServer() {
    this.app = express();

    //todo use HTTPS except HTTP server
    // const httpsServer = https.createServer(credentials, app);

    this.app.listen(this.port, () => {
      this.initMiddleWares();
      this.initRoutes();
      debug(`server was run on port ${this.port}`);
    })
  }

  initRoutes() {
    this.app.use(router);
  }

  initMiddleWares() {
    const json_body_parser = bodyParser.json();
    const urlencoded_body_parser = bodyParser.urlencoded({ extended: true });
    this.app.use(json_body_parser);
    this.app.use(urlencoded_body_parser);
    this.app.use(cookieParser());

    this.app.set('superSecret', process.env.SECRET);

    this.app.use(morgan('dev'))
  }
}

module.exports = Server;