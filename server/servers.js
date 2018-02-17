const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');

class Server {
  constructor(port) {
    this.port = port;
  }

  runServer() {
    this.app = express();

    this.app.listen(this.port, () => {
      this.initMiddleWares();
      this.initRoutes();
      console.log(`server was run on port ${this.port}`);
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
  }
}

module.exports = Server;